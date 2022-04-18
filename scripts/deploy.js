const hre = require("hardhat");

async function main() {
  const MetaverseDAO = await hre.ethers.getContractFactory(
    "MetaverseDAO"
  );
  const deployedMetaverseDAO = await MetaverseDAO.deploy();

  await deployedMetaverseDAO.deployed();

  console.log(
    "Deployed MetaverseDAO Address:",
    deployedMetaverseDAO.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
