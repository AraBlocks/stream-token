# stream-token

This repo, *stream-token*, has the smart contract code and hardhat task to compile, deploy, and verify the contract.
Check out the other repo, *stream-page*, for the minting page.

Contract `StreamA1` created and (much later) verified on
[goerli](https://goerli.etherscan.io/tx/0x9cf7ee275596bed911f8a6511ec7dd7a5a4c24c3cb7f14ffc2364bd278ab0b81),
and created and verified on
[mainnet](https://etherscan.io/tx/0xb9a74ee2c1cfeb293a378a8714903ee29d7caa5630a6ea54a3e27c1b032cc5c4).

Contract `StreamA4`, created and verified on
[goerli](https://goerli.etherscan.io/tx/0x622530d34cfb58c44f619e55a286604ef63cb42d2cda760d60dcef1b65ff51da)
and created and verified on
[mainnet](https://etherscan.io/tx/0x3c521562667100ecad679725595698c8f99faa3a620987f6332164b40dd74f34).

Then, updated compiler version 0.8.9 -> 0.8.17.

Contract `StreamA5` created and verified on
[goerli](https://goerli.etherscan.io/tx/0x48a3e863cb9b21f4e1c1dd6bbccdc5f9d149ea62eae90ec30358d2ae4f3032a9)
only.

Contract `StreamA6`, a release candidate, created and verified on
[goerli](https://goerli.etherscan.io/tx/0xa08cf2455597a503785e8d3d8c8d81db924f069d67fe1d5550ae410fb56fd6a4)
and created and verified on
[mainnet](https://etherscan.io/tx/0xd4250c2104de52a0e0dd3df5d4c72a3f9cb7a6b9d558aa839f7d4064eb941dbc).

Contract `Stream A7` (now with a space in the name), a release candidate, made on
[goerli](https://goerli.etherscan.io/tx/0x28fbc25a772e68fda7d13c592a3ddd333f0d256e453b663c7bad1cfcb141fea1)
and
[mainnet](https://etherscan.io/tx/0x76b229ca6d2a1a9144df965043b2f5de7ec15c969899f5434904defdadc7a9d1).

Contract `Stream A8`, a release candidate, made on
[goerli](https://goerli.etherscan.io/tx/0x3bc40aee5cc74b5d9e4dc67885d9d402bd22d9a8c8aefd8e8e076dee0adf62d3)
and
[mainnet](https://etherscan.io/tx/0xed132cb2efcf63ce1f84676bb29a8836e9f00e513da5038035c86c0a54bc80b3).

Contract `Stream A9`, a release candidate, made on
[goerli](https://goerli.etherscan.io/tx/0x7eb0799e115cb36bb09fc8007f8179de92a6d436ae5fb3519031a7f37aa0c004)
and
[mainnet](https://etherscan.io/tx/0x3404ea6a8f5f7dc9c189e191f03c20e50723e5fd3d2ac5bfdd0f5f240f225b85).

Contract `Stream10`, made on
[goerli](https://goerli.etherscan.io/tx/0xd711f9a7b1222d2dfda3db0b1b5aa6cc4887da2c394e747ccf8c94d369fea9da)
and
[mainnet](https://etherscan.io/tx/0x6c1c98b4ef9a351d9e367144c7733afb00d141920dfdea753c769a93f657560b).

Contract `Stream11`, minimal fork from AGC, made on
[goerli](https://goerli.etherscan.io/tx/0x610c29e4348481a550c17e7a2ef2b002b2f8574fbc1ee0914fa6f5a4a19d84cf)
and
[mainnet](https://etherscan.io/tx/0x0e61c17579d18cd9f8dbfe9324993d6740052e1020d81f0afa92698bc450039c).

Contract `Stream12`, made on
[goerli](https://goerli.etherscan.io/tx/0xb04acc9488166b59c003fe705d3feb957112ddd36fa2bcfadd12230dd16e25dd)
and
[mainnet](https://etherscan.io/tx/0xf91f55a7186f4e3d2c34d8fcf46f80ccb8d5b6d221fee37b240eb0d62c2673f0).

Copy and fill out:

```
$ cp example.env .env
```

Delete for a fresh start:

```
/artifacts/
/cache/
/node-modules/
/package-lock.json
```

Set the name and symbol:

```
StreamPass.sol
    constructor() ERC721B("Stream13", "S13") ...
```

Deploy and verify:

```
$ npm install
$ npx hardhat compile

$ npx hardhat deploy --network goerli
$ npx hardhat verify --network goerli 0x[ deployed contract address ] [ no constructor arguments ]

$ npx hardhat deploy --network ethereum
$ npx hardhat verify --network ethereum 0x[ deployed contract address ] [ no constructor arguments ]
```
