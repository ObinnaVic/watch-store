//https://eth-goerli.g.alchemy.com/v2/HpfbCu8XwuaeSPA5_a4V6Kn2ILuESa3l
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.URL_KEY,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
  },
};
