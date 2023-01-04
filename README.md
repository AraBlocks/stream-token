# stream-token

This repo, *stream-token*, has the smart contract code and hardhat task to compile, deploy, and verify the contract.
Check out the other repo, *stream-page*, for the minting page.

Contract created on (much later) verified on
[goerli](https://goerli.etherscan.io/tx/0x9cf7ee275596bed911f8a6511ec7dd7a5a4c24c3cb7f14ffc2364bd278ab0b81),
and created and verified on
[mainnet](https://etherscan.io/tx/0xb9a74ee2c1cfeb293a378a8714903ee29d7caa5630a6ea54a3e27c1b032cc5c4).

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
    constructor() ERC721B("StreamA1", "SA1") { }
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
