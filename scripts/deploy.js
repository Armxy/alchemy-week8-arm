const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  //get the signer that we will use to deploy
  const [deployer] = await ethers.getSigners();
  
  //Get the NFTMarketplace smart contract object and deploy it
  const CasinoContract = await hre.ethers.getContractFactory("Casino");
  const casino = await CasinoContract.deploy();

  await casino.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });