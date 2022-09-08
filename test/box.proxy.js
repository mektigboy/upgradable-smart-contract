const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

let Box;
let box;

describe("Box (proxy):", function () {
  beforeEach(async function () {
    Box = await ethers.getContractFactory("BoxV1");
    box = await upgrades.deployProxy(Box, [1], { initializer: "store" });
  });

  it("Function 'retrieve' returns a value previously initialized.", async function () {
    expect((await box.retrieve()).toString()).to.equal("1");
  });
});
