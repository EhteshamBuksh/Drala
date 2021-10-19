const DalaCoin = artifacts.require("DralaCoin");

module.exports = function (deployer) {
    deployer.deploy(DralaCoin,"Drala","DRA",18,"1000000000000000000000000");
};
