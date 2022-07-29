const { ethers } = require("hardhat");

async function main() {
  
  const whitelistContract = await ethers.getContractFactory("Whitelisting");

  
  const deployedWhitelistContract = await whitelistContract.deploy(20);
  // 20 is the Maximum number of whitelisted addresses allowed
  
  
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Whitelist Contract Address:",
    deployedWhitelistContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });