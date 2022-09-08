async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const boxProxy = await upgrades.upgradeProxy(
    "0xb1E7cAa8B5B767050B4966370Da2F7f5c39D850d",
    BoxV2
  );
  console.log("Your upgraded proxy is done:", boxProxy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
