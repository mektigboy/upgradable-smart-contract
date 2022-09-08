async function main() {
  const BoxV1 = await ethers.getContractFactory("BoxV1");
  console.log("Deploying Proxy, Box Implementation, Proxy Admin...");
  const boxProxy = await upgrades.deployProxy(BoxV1, [1], {
    initializer: "store",
  });
  console.log("BoxProxy deployed to:", boxProxy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
