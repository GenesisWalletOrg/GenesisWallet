
<p align="center">
  <a href="https://github.com/GenesisWalletOrg/GenesisWallet/releases">
    <img src="https://img.shields.io/github/downloads/GenesisWalletOrg/GenesisWallet/total?style=for-the-badge" alt="Downloads">
  </a>
</p>

# Genesis Wallet — BitcoinII (BC2)

> ⚠️ **EARLY ACCESS SOFTWARE** — Please **back up your keys** before use. This software is still in active development.

GenesisWallet is an open source, community built wallet for Bitcoin II (BC2) Bitcoin's conservative sister chain. Built with React Native and Electrum, forked from BlueWallet.

GenesisWallet is an independent open source project and is not affiliated with the BitcoinII Organization.

**Version:** 0.1.0 Beta

## Links

| | |
|---|---|
| 🌐 Website | [genesiswallet.org](https://genesiswallet.org) |
| 🔗 BC2 | [bitcoin-ii.org](https://bitcoin-ii.org) |
| 🔍 Explorer | [bc2explorer.com](https://bc2explorer.com) |
| 💬 Discord | [discord.com/invite/zUSkQHNVyG](https://discord.com/invite/zUSkQHNVyG) |
| 🟠 Reddit | [r/BitcoinII](https://www.reddit.com/r/BitcoinII/) |
| 🐦 X/Twitter | [@bitcoiniiorg](https://x.com/bitcoiniiorg) |

---

## Features

- 🔐 **Self-Custody** — Private keys never leave your device
- ⚡ **SegWit Support** — Native SegWit (Bech32) transactions
- 🔄 **Replace-By-Fee** — Bump stuck transactions
- 🛡️ **Encrypted Storage** — Plausible deniability built in
- 📱 **Android** — iOS support coming soon
- 🌐 **BC2 Native** — Built specifically for the Bitcoin II network

---

## About Bitcoin II (BC2)

Bitcoin II is a SHA-256 proof-of-work cryptocurrency positioned as Bitcoin's conservative sister chain, maintaining 1:1 compatibility with Bitcoin Core (v27/v29), preserving Satoshi's original pre-v30 design.

**Resources:**
- [Whitepaper](https://bitcoinii.ddns.net/BitcoinII.pdf)
- [Node Map](https://bitcoinii.ddns.net/NodeMap.html)
- [Block Explorer](https://bc2explorer.com) · [bc2.live](https://bc2.live)
- [Mining Pool Stats](https://miningpoolstats.stream/bitcoinii)

**Exchanges:**
- [NonKYC](https://nonkyc.io/market/BC2_USDT)
- [CoinEx](https://www.coinex.com/en/exchange/BC2-USDT)
- [Biconomy](https://www.biconomy.com/exchange/BC2_USDT)

---

## Build & Run

### Prerequisites

Refer to the `engines` field in `package.json` for minimum required Node and npm versions. Use an even-numbered (LTS) Node version.

```bash
node --version && npm --version
```

### Installation

```bash
git clone https://github.com/GenesisWalletOrg/GenesisWallet.git
cd GenesisWallet
npm install
```

### Android

1. Connect an Android device via USB with USB debugging enabled, or start an emulator.
2. Run:

```bash
npx react-native run-android
```

### iOS (Coming Soon)

DO NOT BUILD FOR IOS, WILL LIKELY OVERWRITE BLUEWALLET IF ALREADY INSTALLED

## Tests

```bash
npm run test
```

---

## Contributing

Contributions are welcome. Join the community:

- **Discord:** [discord.com/invite/zUSkQHNVyG](https://discord.com/invite/zUSkQHNVyG)
- **Reddit:** [r/BitcoinII](https://www.reddit.com/r/BitcoinII/)
- **GitHub:** [github.com/GenesisWalletOrg](https://github.com/GenesisWalletOrg)

---

## License

MIT

---

## Acknowledgments

Genesis Wallet is a fork of [BlueWallet](https://github.com/BlueWallet/BlueWallet), adapted for the BitcoinII network. Thanks to the BlueWallet team for their excellent open source work.

---

## Responsible Disclosure

Found a bug or vulnerability? Please report it via [Discord](https://discord.com/invite/zUSkQHNVyG) or open a GitHub issue.
