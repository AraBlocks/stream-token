# stream-token

This repo, *stream-token*, has the smart contract code and hardhat task to compile, deploy, and verify the contract.
Check out the other repo, *stream-page*, for the minting page.

Contract `StreamA1` created and (much later) verified on
[goerli](https://goerli.etherscan.io/tx/0x9cf7ee275596bed911f8a6511ec7dd7a5a4c24c3cb7f14ffc2364bd278ab0b81),
and created and verified on
[mainnet](https://etherscan.io/tx/0xb9a74ee2c1cfeb293a378a8714903ee29d7caa5630a6ea54a3e27c1b032cc5c4).

Contract `StreamA4`, the release candidate, created and verified on
[goerli](https://goerli.etherscan.io/tx/0x622530d34cfb58c44f619e55a286604ef63cb42d2cda760d60dcef1b65ff51da)
and created and verified on
[mainnet](https://etherscan.io/tx/0x3c521562667100ecad679725595698c8f99faa3a620987f6332164b40dd74f34).

Copy and fill out:

```
$ cp example.env .env
```

Delete for a fresh start:

```
/abi/
/artifacts/
/cache/
/data/
/node-modules/
/package-lock.json
```

Set the name and symbol:

```
StreamA.sol:1291
    constructor() ERC721B("StreamA4", "SA4") { }
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
