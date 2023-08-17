// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transaction {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    uint public transactionCount;

    struct TransactionList {
        address receiver;
        address sender;
        uint amount;
        uint time;
    }

    TransactionList[] transactions;

    event Transfer(address receiver, address sender, uint amount, uint timeStamp);

    function addToBlockchain(uint amount) public {
        transactionCount++;
        transactions.push(TransactionList(owner, msg.sender, amount, block.timestamp));
        emit Transfer(owner, msg.sender, amount, block.timestamp);
    }

    function getAllTransactions() public view returns(TransactionList[] memory){
        return transactions;
    }

    function getTransactionCount() public view returns(uint) {
        return transactionCount;
    }
}