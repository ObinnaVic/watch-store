//https://eth-goerli.g.alchemy.com/v2/HpfbCu8XwuaeSPA5_a4V6Kn2ILuESa3l

require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/HpfbCu8XwuaeSPA5_a4V6Kn2ILuESa3l",
      accounts: [
        "e6046397f8667c17d5c04317ece7c47320c64a54c9e19624dab8d47c85d68b5a",
      ],
    },
  },
};
