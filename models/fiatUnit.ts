import { fetch } from '../util/fetch';
import untypedFiatUnit from './fiatUnits.json';

export const FiatUnitSource = {
  BC2Explorer: 'BC2Explorer',
  CoinGecko: 'CoinGecko',
  BC2Convert: 'BC2Convert',
  Exir: 'Exir',
  BNR: 'BNR',
} as const;

const handleError = (source: string, ticker: string, error: Error) => {
  throw new Error(
    `Could not update rate for ${ticker} from ${source}\n: ${error.message}. ` +
      `\nMake sure the network you're on has access to ${source}.`,
  );
};

const fetchRate = async (url: string): Promise<unknown> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

interface CoinGeckoResponse {
  bitcoinii: {
    [ticker: string]: number;
  };
}

interface BC2ExplorerResponse {
  last_price: number;
  market_cap: number;
  coin_supply: number;
}

// Cache for BC2/USD rate to avoid redundant API calls during forex conversion
let bc2UsdCache: { rate: number; timestamp: number } | null = null;
const BC2_USD_CACHE_TTL = 60000; // 1 minute

async function getBC2UsdRate(): Promise<number> {
  const now = Date.now();
  if (bc2UsdCache && now - bc2UsdCache.timestamp < BC2_USD_CACHE_TTL) {
    return bc2UsdCache.rate;
  }
  const json = (await fetchRate('https://bc2explorer.com/stats/')) as BC2ExplorerResponse;
  const rate = Number(json?.last_price);
  if (!(rate >= 0)) throw new Error('Invalid BC2/USD rate');
  bc2UsdCache = { rate, timestamp: now };
  return rate;
}

// Cache for forex rates (USD-based)
let forexCache: { rates: Record<string, number>; timestamp: number } | null = null;
const FOREX_CACHE_TTL = 300000; // 5 minutes

async function getForexRates(): Promise<Record<string, number>> {
  const now = Date.now();
  if (forexCache && now - forexCache.timestamp < FOREX_CACHE_TTL) {
    return forexCache.rates;
  }
  const json = (await fetchRate('https://open.er-api.com/v6/latest/USD')) as { rates: Record<string, number> };
  if (!json?.rates) throw new Error('Invalid forex data');
  forexCache = { rates: json.rates, timestamp: now };
  return json.rates;
}

const RateExtractors = {
  BC2Explorer: async (ticker: string): Promise<number> => {
    try {
      const rate = await getBC2UsdRate();
      return rate;
    } catch (error: any) {
      handleError('BC2Explorer', ticker, error);
      return undefined as never;
    }
  },

  CoinGecko: async (ticker: string): Promise<number> => {
    try {
      const json = (await fetchRate(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoinii&vs_currencies=${ticker.toLowerCase()}`,
      )) as CoinGeckoResponse;
      const rate = Number(json?.bitcoinii?.[ticker.toLowerCase()]);
      if (!(rate >= 0)) throw new Error('Invalid data received');
      return rate;
    } catch (error: any) {
      handleError('CoinGecko', ticker, error);
      return undefined as never;
    }
  },

  BC2Convert: async (ticker: string): Promise<number> => {
    try {
      // Get BC2 price in USD, then convert to target currency using forex rates
      const bc2Usd = await getBC2UsdRate();
      const forexRates = await getForexRates();
      const forexRate = forexRates[ticker.toUpperCase()];
      if (!(forexRate >= 0)) throw new Error(`No forex rate found for ${ticker}`);
      return bc2Usd * forexRate;
    } catch (error: any) {
      handleError('BC2Convert', ticker, error);
      return undefined as never;
    }
  },

  BNR: async (): Promise<number> => {
    try {
      // Fetching USD to RON rate from Romanian National Bank
      const xmlData = await (await fetch('https://www.bnr.ro/nbrfxrates.xml')).text();
      const matches = xmlData.match(/<Rate currency="USD">([\d.]+)<\/Rate>/);
      if (matches && matches[1]) {
        const usdToRonRate = parseFloat(matches[1]);
        // Get BC2/USD rate and convert to RON
        const bc2ToUsdRate = await getBC2UsdRate();
        return bc2ToUsdRate * usdToRonRate;
      }
      throw new Error('No valid USD to RON rate found');
    } catch (error: any) {
      handleError('BNR', 'RON', error);
      return undefined as never;
    }
  },

  Exir: async (ticker: string): Promise<number> => {
    try {
      // Exir is Iran-specific. Get BC2/USD and convert via forex.
      const bc2Usd = await getBC2UsdRate();
      const forexRates = await getForexRates();
      // IRT (Toman) = IRR / 10
      if (ticker.toUpperCase() === 'IRT') {
        const irrRate = forexRates['IRR'];
        if (!(irrRate >= 0)) throw new Error('No forex rate for IRR');
        return (bc2Usd * irrRate) / 10;
      }
      const forexRate = forexRates[ticker.toUpperCase()];
      if (!(forexRate >= 0)) throw new Error(`No forex rate found for ${ticker}`);
      return bc2Usd * forexRate;
    } catch (error: any) {
      handleError('Exir', ticker, error);
      return undefined as never;
    }
  },
} as const;

export type TFiatUnit = {
  endPointKey: string;
  symbol: string;
  locale: string;
  country: string;
  source: 'BC2Explorer' | 'CoinGecko' | 'BC2Convert' | 'Exir' | 'BNR';
};

export type TFiatUnits = {
  [key: string]: TFiatUnit;
};

export const FiatUnit = untypedFiatUnit as TFiatUnits;

export type FiatUnitType = {
  endPointKey: string;
  symbol: string;
  locale: string;
  country: string;
  source: keyof typeof FiatUnitSource;
};

export async function getFiatRate(ticker: string): Promise<number> {
  return await RateExtractors[FiatUnit[ticker].source](ticker);
}
