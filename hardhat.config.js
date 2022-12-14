require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("./scripts/deploy.js");

const { ALCHEMY_GOERLI_API_KEY, ALCHEMY_MAINNET_API_KEY, ETHERSCAN_API_KEY, WALLET_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: { enabled: true, runs: 1000 }
    }
  },
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_GOERLI_API_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
    ethereum: {
      chainId: 1,
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_MAINNET_API_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
}
