# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.0.24](https://github.com/skyra-project/saelem/compare/v3.0.23...v3.0.24) (2022-03-27)

### [3.0.23](https://github.com/skyra-project/saelem/compare/v3.0.22...v3.0.23) (2022-03-27)

### [3.0.22](https://github.com/skyra-project/saelem/compare/v3.0.21...v3.0.22) (2022-03-27)

### [3.0.21](https://github.com/skyra-project/saelem/compare/v3.0.20...v3.0.21) (2022-03-27)

### [3.0.20](https://github.com/skyra-project/saelem/compare/v3.0.19...v3.0.20) (2022-03-20)

### [3.0.19](https://github.com/skyra-project/saelem/compare/v3.0.18...v3.0.19) (2022-03-13)

### [3.0.18](https://github.com/skyra-project/saelem/compare/v3.0.17...v3.0.18) (2022-03-06)

### [3.0.17](https://github.com/skyra-project/saelem/compare/v3.0.16...v3.0.17) (2022-03-06)

### [3.0.16](https://github.com/skyra-project/saelem/compare/v3.0.15...v3.0.16) (2022-03-06)

### [3.0.15](https://github.com/skyra-project/saelem/compare/v3.0.14...v3.0.15) (2022-02-27)

### [3.0.14](https://github.com/skyra-project/saelem/compare/v3.0.13...v3.0.14) (2022-02-20)

### [3.0.13](https://github.com/skyra-project/saelem/compare/v3.0.12...v3.0.13) (2022-02-06)

### [3.0.12](https://github.com/skyra-project/saelem/compare/v3.0.11...v3.0.12) (2022-01-23)

### [3.0.11](https://github.com/skyra-project/saelem/compare/v3.0.10...v3.0.11) (2022-01-02)

### [3.0.10](https://github.com/skyra-project/saelem/compare/v3.0.9...v3.0.10) (2021-12-26)


### Bug Fixes

* **deps:** update dependency graphql to ^15.6.0 ([7f46ebb](https://github.com/skyra-project/saelem/commit/7f46ebb233b1a51865fa2ec82593eaaddc464005))
* fixed server init [skip publish] ([f194035](https://github.com/skyra-project/saelem/commit/f194035e21d0018a9ab2cf239317425224d96464))

### [3.0.9](https://github.com/skyra-project/saelem/compare/v3.0.8...v3.0.9) (2021-06-19)


### Bug Fixes

* swap import and require in export paths ([ef8307f](https://github.com/skyra-project/saelem/commit/ef8307f18e95fd8bc37ab8c59dc8225e8900a75b))

### [3.0.8](https://github.com/skyra-project/saelem/compare/v3.0.7...v3.0.8) (2021-06-19)


### Bug Fixes

* bundle with rollup to output proper JS files ([f864c32](https://github.com/skyra-project/saelem/commit/f864c32ca3be6daca915ba81463f42c58aef6148))

### [3.0.7](https://github.com/skyra-project/saelem/compare/v3.0.6...v3.0.7) (2021-06-19)


### Bug Fixes

* fixed exports not  targeting correct files ([86b50b3](https://github.com/skyra-project/saelem/commit/86b50b332ca180edd7a75da7e715757f706dcb0c))

### [3.0.6](https://github.com/skyra-project/saelem/compare/v3.0.5...v3.0.6) (2021-06-12)

### [3.0.5](https://github.com/skyra-project/saelem/compare/v3.0.4...v3.0.5) (2021-05-19)


### Bug Fixes

* mark package as side effect free ([400901d](https://github.com/skyra-project/saelem/commit/400901d76062cbe7f84a05ffb68b7017ad9cc4da))

### [3.0.4](https://github.com/skyra-project/saelem/compare/v3.0.3...v3.0.4) (2021-02-15)

### [3.0.3](https://github.com/skyra-project/saelem/compare/v3.0.2...v3.0.3) (2021-02-14)

### [3.0.2](https://github.com/skyra-project/saelem/compare/v3.0.1...v3.0.2) (2021-01-14)

### [3.0.1](https://github.com/skyra-project/saelem/compare/v3.0.0...v3.0.1) (2020-12-22)

## [3.0.0](https://github.com/skyra-project/saelem/compare/v2.0.4...v3.0.0) (2020-12-04)

### ⚠ BREAKING CHANGES

-   module-alias is no longer used, instead using NodeJS build in import subpaths. This
    is a breaking change because this forces the use of NodeJS 14 or higher to run the API.

### Features

-   rewrite to use more recent/maintained libraries ([674194c](https://github.com/skyra-project/saelem/commit/674194cbf473eab860e1592e7e34dcd58102c2c8)), closes [#26](https://github.com/skyra-project/saelem/issues/26)

### [2.0.4](https://github.com/skyra-project/saelem/compare/v2.0.3...v2.0.4) (2020-11-08)

### [2.0.3](https://github.com/skyra-project/saelem/compare/v2.0.2...v2.0.3) (2020-10-23)

### [2.0.2](https://github.com/skyra-project/saelem/compare/v2.0.1...v2.0.2) (2020-10-16)

### [2.0.1](https://github.com/skyra-project/saelem/compare/v2.0.0...v2.0.1) (2020-10-04)

## [2.0.0](https://github.com/skyra-project/saelem/compare/v1.1.1...v2.0.0) (2020-08-13)

### ⚠ BREAKING CHANGES

-   Redis is now required to run Saelem. For local development you will find a
    docker-compose file. For production environment see the setup used in
    [Skyra](https://github.com/skyra-project/skyra)

### Features

-   implement redis based caching ([#6](https://github.com/skyra-project/saelem/issues/6)) ([fe89c7d](https://github.com/skyra-project/saelem/commit/fe89c7d0043059d6ef812a479169610e17bdba7f))

### Bug Fixes

-   add module-alias dev-dep ([009d524](https://github.com/skyra-project/saelem/commit/009d52492910ec5134950cdc814caefd9ed38e91))

### [1.1.1](https://github.com/skyra-project/saelem/compare/v1.1.0...v1.1.1) (2020-07-26)

## [1.1.0](https://github.com/skyra-project/saelem/compare/v1.0.9...v1.1.0) (2020-07-26)

### Features

-   rename master branch to main ([a3f710d](https://github.com/skyra-project/saelem/commit/a3f710d3278b9f3d11c2ef58f5cd7e217961342a))

### [1.0.9](https://github.com/skyra-project/saelem/compare/v1.0.8...v1.0.9) (2020-07-25)

### Bug Fixes

-   **readme:** update logo url ([f8bdc4f](https://github.com/skyra-project/saelem/commit/f8bdc4fdcd21282cf9d6df8644ba16ae34f21923))
-   ensure keywords are returned as an actual string array ([ff51f33](https://github.com/skyra-project/saelem/commit/ff51f33bba8c87f604fcf50bff7a809c9318c65d))

### [1.0.8](https://github.com/skyra-project/saelem/compare/v1.0.7...v1.0.8) (2020-07-24)

### Bug Fixes

-   fixed package main and types ([aebe8dc](https://github.com/skyra-project/saelem/commit/aebe8dc13be6b1651762861f1f8ab68115e9d9dc))
-   rename Query in schema to SaelemQuery to not conflict with other graphql schemas ([4050370](https://github.com/skyra-project/saelem/commit/4050370dbe5f50f10b38a06f66c515e44770b394))

### [1.0.7](https://github.com/skyra-project/saelem/compare/v1.0.6...v1.0.7) (2020-07-24)

### Bug Fixes

-   **service:** added fetch options ([#5](https://github.com/skyra-project/saelem/issues/5)) ([af2b725](https://github.com/skyra-project/saelem/commit/af2b725ae68876c5dfc607e35640c006647a0b3c))

### [1.0.6](https://github.com/skyra-project/saelem/compare/v1.0.5...v1.0.6) (2020-07-20)

### [1.0.5](https://github.com/skyra-project/saelem/compare/v1.0.4...v1.0.5) (2020-07-15)

### [1.0.4](https://github.com/skyra-project/saelem/compare/v1.0.3...v1.0.4) (2020-07-01)

### Bug Fixes

-   **readme:** fixed twitter link for Kyra ([b8b0cb8](https://github.com/skyra-project/saelem/commit/b8b0cb84da303ebfa9a9f52bed0cde89d6fd454e))

### [1.0.3](https://github.com/skyra-project/saelem/compare/v1.0.0...v1.0.3) (2020-07-01)

### Bug Fixes

-   this should fix gh publish ([2db37db](https://github.com/skyra-project/saelem/commit/2db37dbfbdb2193df233ca74a7cba3dfb1aeb29e))
-   **readme:** simplify install section ([de67adc](https://github.com/skyra-project/saelem/commit/de67adc5470a1e7995ec1ecf2b6cb265b0977efe))
-   fixed gh package publish ([7cb3d23](https://github.com/skyra-project/saelem/commit/7cb3d23eccf89ba6263218dfe26075048c7ef489))
-   fixed link in README ([b6456a5](https://github.com/skyra-project/saelem/commit/b6456a5359340f948f523045be2a4d5094e7dc1f))
-   really fix publishing to gpr ([7cde9eb](https://github.com/skyra-project/saelem/commit/7cde9ebdb65509f0e9c8463782b8b3a4d2d65c19))

### [1.0.2](https://github.com/skyra-project/saelem/compare/v1.0.0...v1.0.2) (2020-07-01)

### Bug Fixes

-   **readme:** simplify install section ([de67adc](https://github.com/skyra-project/saelem/commit/de67adc5470a1e7995ec1ecf2b6cb265b0977efe))
-   fixed gh package publish ([7cb3d23](https://github.com/skyra-project/saelem/commit/7cb3d23eccf89ba6263218dfe26075048c7ef489))
-   fixed link in README ([b6456a5](https://github.com/skyra-project/saelem/commit/b6456a5359340f948f523045be2a4d5094e7dc1f))
-   really fix publishing to gpr ([7cde9eb](https://github.com/skyra-project/saelem/commit/7cde9ebdb65509f0e9c8463782b8b3a4d2d65c19))

### [1.0.1](https://github.com/skyra-project/saelem/compare/v1.0.0...v1.0.1) (2020-07-01)

### Bug Fixes

-   fixed gh package publish ([7cb3d23](https://github.com/skyra-project/saelem/commit/7cb3d23eccf89ba6263218dfe26075048c7ef489))

## 1.0.0 (2020-07-01)

### Features

-   repo setup ([e000d5c](https://github.com/skyra-project/saelem/commit/e000d5ce79748f67a7fc2d9b4393546ef0b86bc7))
-   update README ([8d0de23](https://github.com/skyra-project/saelem/commit/8d0de237caed298a2a793d756cc6214bfd0b69c2))
-   write api ([a57aa27](https://github.com/skyra-project/saelem/commit/a57aa278bd65c20ba951614fb007a86507f95e6f))
