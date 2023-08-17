const { expect } = require("chai");

describe("Transaction", function () {
  let deployer, buyer;
  let transactions;
  beforeEach(async () => {
    [deployer, buyer] = await ethers.getSigners();
    const Transaction = await ethers.getContractFactory("Transaction");
    transactions = await Transaction.deploy();

    const newTransaction = await transactions.connect(deployer).addToBlockchain(20, "Hello World");
    await newTransaction.wait();
  });
  describe("Deployment", () => {
    it("Sets the owner", async () => {
      expect(await transactions.owner()).to.equal(deployer.address);
    });
  });
  describe("TransactionCount", () => {
    it("Update the transaction Count", async() => {
      const Count = await transactions.transactionCount();
      expect(Count).to.equal(1);
    })
  })
});
