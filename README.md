<div align="center">

<img style="height: 200px" src="https://cdn.skyra.pw/gh-assets/saelem.png" height="200" alt="logo"/>

# Saelem

**Horoscope API for [Skyra]**

[![GitHub](https://img.shields.io/github/license/skyra-project/saelem)](https://github.com/skyra-project/saelem/blob/main/LICENSE.md)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/skyra-project/saelem.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/skyra-project/saelem/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/skyra-project/saelem.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/skyra-project/saelem/context:javascript)
[![npm](https://img.shields.io/npm/v/@skyra/saelem?color=crimson&label=TypeScript%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@skyra/saelem)
[![Depfu](https://badges.depfu.com/badges/785b29d93aecce969a40182f63514e66/count.svg)](https://depfu.com/github/skyra-project/saelem?project_id=13933)

[![Support Server](https://discord.com/api/guilds/254360814063058944/embed.png?style=banner2)](https://join.skyra.pw/sapphire)

</div>

---

## Description

Horoscope query GraphQL API for [Skyra]

**Key Features**

-   Fully generated client-side TypeScript typings published to
    -   [npm] as `@skyra/saelem`
    -   [GitHub Package Registry] as `@skyra/saelem`
-   Docker images of the API for private hosting published to
    -   [Dockerhub] as `skyra-project/saelem`
    -   [GitHub Package Registry] as `docker.pkg.github.com/skyra-project/saelem/saelem`
-   Makes use of [Astrology.tv] by [Keli Fox]
-   Data gets cached in a Redis instance to prevent over-fetching [Astrology.tv]

## Installation

Install client side typings from [yarn] or [npm]:

```sh
yarn add -D @skyra/saelem
```

```sh
npm install -D @skyra/saelem
```

---

## Usage

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

## Buy us some doughnuts

Skyra Project is open source and always will be, even if we don't get donations. That said, we know there are amazing people who
may still want to donate just to show their appreciation. Thanks you very much in advance!

We accept donations through Patreon, BitCoin, Ethereum, and Litecoin. You can use the buttons below to donate through your method of choice.

| Donate With |         QR         |                                                                  Address                                                                  |
| :---------: | :----------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
|   Patreon   | ![PatreonImage][]  |                                               [Click Here](https://donate.skyra.pw/patreon)                                               |
|   PayPal    |  ![PayPalImage][]  |                                               [Click Here](https://donate.skyra.pw/paypal)                                                |
|   BitCoin   | ![BitcoinImage][]  |         [3JNzCHMTFtxYFWBnVtDM9Tt34zFbKvdwco](bitcoin:3JNzCHMTFtxYFWBnVtDM9Tt34zFbKvdwco?amount=0.01&label=Skyra%20Discord%20Bot)          |
|  Ethereum   | ![EthereumImage][] | [0xcB5EDB76Bc9E389514F905D9680589004C00190c](ethereum:0xcB5EDB76Bc9E389514F905D9680589004C00190c?amount=0.01&label=Skyra%20Discord%20Bot) |
|  Litecoin   | ![LitecoinImage][] |         [MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM](litecoin:MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM?amount=0.01&label=Skyra%20Discord%20Bot)         |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/favna/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/skyra-project/saelem/commits?author=Favna" title="Code">💻</a> <a href="https://github.com/skyra-project/saelem/commits?author=Favna" title="Documentation">📖</a> <a href="#infra-Favna" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-Favna" title="Project Management">📆</a> <a href="https://github.com/skyra-project/saelem/commits?author=Favna" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/kyranet"><img src="https://avatars0.githubusercontent.com/u/24852502?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Antonio Román</b></sub></a><br /><a href="#projectManagement-kyranet" title="Project Management">📆</a></td>
    <td align="center"><a href="https://skyra.pw/"><img src="https://avatars0.githubusercontent.com/u/61647701?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Skyra</b></sub></a><br /><a href="#infra-NM-EEA-Y" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/apps/depfu"><img src="https://avatars3.githubusercontent.com/in/715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>depfu[bot]</b></sub></a><br /><a href="#maintenance-depfu[bot]" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!----------------- LINKS --------------->

[astrology.tv]: https://astrology.tv/
[keli fox]: https://twitter.com/KelliFoxAstro
[yarn]: https://yarnpkg.com/package/@skyra/saelem
[npm]: https://www.npmjs.com/package/@skyra/saelem
[github package registry]: https://github.com/skyra-project/saelem/packages
[dockerhub]: https://hub.docker.com/r/skyrabot/saelem
[patreonimage]: https://cdn.skyra.pw/gh-assets/patreon.png
[paypalimage]: https://cdn.skyra.pw/gh-assets/paypal.png
[bitcoinimage]: https://cdn.skyra.pw/gh-assets/bitcoin.png
[ethereumimage]: https://cdn.skyra.pw/gh-assets/ethereum.png
[litecoinimage]: https://cdn.skyra.pw/gh-assets/litecoin.png
[skyra]: https://github.com/skyra-project/skyra
