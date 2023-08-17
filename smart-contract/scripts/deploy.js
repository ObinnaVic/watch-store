const hre = require("hardhat");

async function main() {
  const Transaction = await hre.ethers.getContractFactory("Transaction");
  let transactions = await Transaction.deploy();
  await transactions.deployed();

  console.log("Transaction deployed to:", transactions.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async () => {
  try {
    await main();
    process.exitCode = 0;
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
}

runMain();
