<div align="center">
  <p>
  <img style="height: 200px" src="https://cdn.skyra.pw/img/saelem.png" height="200" alt="logo"/>
  </p>

  <p>
<h1> Saelem </h1>
<h3> Horoscope API for <a href="https://github.com/skyra-project/skyra">Skyra<a></h3>
  </p>

</div>

---

**Table of Contents**

- [Installation](#installation)
  * [NodeJS](#nodejs)
- [Usage](#usage)
- [Meta](#meta)
  * [License](#license)
  * [Buy us some doughnuts](#buy-us-some-doughnuts)

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/skyra-project/saelem?logo=github&style=flat-square)](https://github.com/skyra-project/saelem/blob/master/LICENSE.md)
[![Continuous Deployment](https://github.com/skyra-project/saelem/workflows/Continuous%20Deployment/badge.svg)](https://github.com/skyra-project/saelem/actions?query=workflow%3A"Continuous+Deployment")
<!-- [![Continuous Integration](https://github.com/skyra-project/saelem/workflows/Continuous%20Integration/badge.svg)](https://github.com/skyra-project/saelem/actions?query=workflow%3A"Continuous+Integration") -->

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://join.skyra.pw)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Twitter Follow](https://img.shields.io/twitter/follow/kyranet?label=Follow%20@kyranet&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/kyranet/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://donate.skyra.pw/patreon)](https://donate.skyra.pw/patreon)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://donate.skyra.pw/paypal)](https://donate.skyra.pw/paypal)

**Typings**

[![npm](https://img.shields.io/npm/v/@skyra/saelem?color=crimson&label=TypeScript%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@skyra/saelem)

---

**_Query Horoscope data using GraphQL_**

**Key Features**

- Fully generated client-side TypeScript typings published to
  - [npm] as `@skyra/saelem`
  - [GitHub Package Registry] as `@skyra/saelem`
- Docker images of the API for private hosting published to
  - [Dockerhub] as `skyra-project/saelem`
  - [GitHub Package Registry] as `docker.pkg.github.com/skyra-project/saelem/saelem`
- Makes use of [Astrology.tv] by [Keli Fox]

# Installation

## NodeJS

Install client side typings from [yarn] or [npm]:

```sh
yarn add -D @skyra/saelem
```

```sh
npm install -D @skyra/saelem
```

---

# Usage

```ts
import { Query } from '@skyra/saelem';

interface SaelemResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Omit<Query[K], '__typename'>>;
}

fetch('http://localhost:8284', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `
      {
          getHoroscope(sunsign: aries) {
              prediction
              intensity
              keywords
              mood
              rating
              date
          }
      }
    `
  })
})
  .then((res) => res.json() as SaelemResponse<'getHoroscope'>)
  .then((json) => console.log(json.data));
```

# Meta

## License

Copyright © 2020, [Skyra Project](https://github.com/skyra-project).
Released under the [MIT License](LICENSE.md).

## Buy us some doughnuts

Skyra Project is open source and always will be, even if we don't get donations. That said, we know there are amazing people who
may still want to donate just to show their appreciation. Thanks you very much in advance!

We accept donations through Patreon, BitCoin, Ethereum, and Litecoin. You can use the buttoms below to donate through your method of choice.

| Donate With |         QR         |                                                                  Address                                                                  |
| :---------: | :----------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
|   Patreon   | ![PatreonImage][]  |                                               [Click Here](https://www.patreon.com/kyranet)                                               |
|   PayPal    | ![PayPalImage][]   |                [Click Here](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CET28NRZTDQ8L)                |
|   BitCoin   | ![BitcoinImage][]  |         [3JNzCHMTFtxYFWBnVtDM9Tt34zFbKvdwco](bitcoin:3JNzCHMTFtxYFWBnVtDM9Tt34zFbKvdwco?amount=0.01&label=Skyra%20Discord%20Bot)          |
|  Ethereum   | ![EthereumImage][] | [0xcB5EDB76Bc9E389514F905D9680589004C00190c](ethereum:0xcB5EDB76Bc9E389514F905D9680589004C00190c?amount=0.01&label=Skyra%20Discord%20Bot) |
|  Litecoin   | ![LitecoinImage][] |         [MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM](litecoin:MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM?amount=0.01&label=Skyra%20Discord%20Bot)         |

<!----------------- LINKS --------------->

[Astrology.tv]:                      https://astrology.tv/
[Keli Fox]:                          https://twitter.com/KelliFoxAstro

[yarn]:                              https://yarnpkg.com/package/@skyra/saelem
[npm]:                               https://www.npmjs.com/package/@skyra/saelem
[github package registry]:           https://github.com/skyra-project/saelem/packages
[dockerhub]:                         https://hub.docker.com/r/skyrabot/saelem

[patreonimage]:                      https://raw.githubusercontent.com/skyra-project/Skyra/master/assets/github/patreon.png
[paypalimage]:                       https://raw.githubusercontent.com/skyra-project/Skyra/master/assets/github/paypal.png
[bitcoinimage]:                      https://raw.githubusercontent.com/skyra-project/Skyra/master/assets/github/bitcoin.png
[ethereumimage]:                     https://raw.githubusercontent.com/skyra-project/Skyra/master/assets/github/ethereum.png
[litecoinimage]:                     https://raw.githubusercontent.com/skyra-project/Skyra/master/assets/github/litecoin.png