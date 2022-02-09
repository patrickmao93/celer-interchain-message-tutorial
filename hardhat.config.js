require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

// Remember to add your RPC provider URL for Goerli and populate the accounts
// arrays with your testing private key.
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/05292285f2a447d598c465726ad6746f",
      accounts: [
        "4e6b79814cc0a257f55f1b5c32a183e8600aa6992b4e5712046d41e56e06d696",
      ],
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [
        "4e6b79814cc0a257f55f1b5c32a183e8600aa6992b4e5712046d41e56e06d696",
      ],
    },
  },
  etherscan: {
    apiKey: {
      goerli: "SCSXAPPPS3EHRKRN42YJKFCFJDMZ45CBG1",
      bscTestnet: "GFJTF1965TXB79DPVKCJ8E186MQYATEC88",
    },
  },
};
