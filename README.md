# Genesis Wallet - A Bitcoin II (BC2) Wallet
EARLY ACCESS SOFTWARE
Please BACK UP YOUR KEYS 

Genesiswallet is still in development. Currenly only USD will show the correct price for BC2, any other currency selected will show BTC's price. This is expected and will be updated in the future
Some known minor UI tweaks need to be made like the spinning loading icon as well as the sat2s/vbytes button is also blue

- [Version] 7.2.3 (https://github.com/GenesisWalletOrg)


GenesisWallet is an open source community made wallet for Bitcoin II (BC2) - Bitcoin's sister chain. 
Built with React Native and Electrum, forked from BlueWallet. GenesisWallet is open source project and is not associated with the BitcoinII Organization.

**GenesisWallet:** [genesiswallet.org](https://genesiswallet.org)

**BC2 Website:** [bitcoin-ii.org](https://bitcoin-ii.org)

**Explorer:** [bc2explorer.com](https://bc2explorer.com)

**Community:** [Discord](https://discord.com/invite/zUSkQHNVyG) | [Reddit](https://www.reddit.com/r/BitcoinII/) | [X/Twitter](https://x.com/bitcoiniiorg)

## Features

* 🔐 **Self-Custody** - Private keys never leave your device
* ⚡ **SegWit Support** - Native SegWit (Bech32) transactions
* 🔄 **Replace-By-Fee** - Bump stuck transactions
* 🛡️ **Encryption** - Plausible deniability with encrypted storage
* 📱 **Cross-Platform** - Android support (iOS coming soon)
* 🌐 **BC2 Native** - Built specifically for the Bitcoin II network

## About Bitcoin II (BC2)

Bitcoin II is a proof-of-work cryptocurrency positioned as Bitcoin's "conservative sister chain" that maintains near 1:1 compatibility with Bitcoin v27 and v29 Core, preserving Satoshi's original pre v30 code. BitcoinII uses the same SHA-256 proof of work algorithm as BTC.

**Key Resources:**
- [Whitepaper](https://bitcoinii.ddns.net/BitcoinII.pdf)
- [Node Map](https://bitcoinii.ddns.net/NodeMap.html)
- [Block Explorer](https://bc2explorer.com) or (https://bc2.live)
- [Mining Pool Stats](https://miningpoolstats.stream/bitcoinii)

## Build & Run

### Prerequisites

Please refer to the `engines` field in `package.json` for minimum required versions of Node and npm. Use an even-numbered (LTS) version of Node.

Check your versions:
```bash
node --version && npm --version
```

### Installation

```bash
git clone https://github.com/GenesisWalletOrg/GenesisWallet.git
cd GenesisWallet
npm install
```

### Run on Android

1. Connect an Android device via USB (with USB debugging enabled) or start an Android emulator
2. Run:
```bash
npx react-native run-android
```

### Run on iOS (Coming Soon)

```bash
npx pod-install
npm start
```

In another terminal:
```bash
npx react-native run-ios
```

## Tests

```bash
npm run test
```

## Contributing

We welcome contributions! Join the BC2 community:

- **Discord:** [discord.com/invite/zUSkQHNVyG](https://discord.com/invite/zUSkQHNVyG)
- **Reddit:** [r/BitcoinII](https://www.reddit.com/r/BitcoinII/)
- **GitHub:** [github.com/GenesisWalletOrg](https://github.com/GenesisWalletOrg)

## Exchanges

BC2 is available on:
- [NonKYC](https://nonkyc.io/market/BC2_USDT)
- [CoinEx](https://www.coinex.com/en/exchange/BC2-USDT)
- [Biconomy](https://www.biconomy.com/exchange/BC2_USDT)
- 
## License

MIT

## Acknowledgments

Genesis Wallet is a fork of [BlueWallet](https://github.com/BlueWallet/BlueWallet), adapted for the Bitcoin II network. We thank the BlueWallet team for their excellent open-source Bitcoin wallet.

## Responsible Disclosure

Found critical bugs or vulnerabilities? Please report them via our Discord or GitHub issues.
