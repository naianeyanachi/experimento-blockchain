const MyToken = artifacts.require("./MyToken");

module.exports = function (deployer) {
  const name = "My Token";
  const symbol = "MT";
  const decimals = 10;
  deployer.deploy(MyToken, name, symbol, decimals);
};
