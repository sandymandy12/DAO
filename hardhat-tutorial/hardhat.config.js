require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// FakeNFTMarketplace deployed to:  0x238E494baB58A853109570C4a7C9Ea018A29F869
// CryptoDevsDAO deployed to:  0xBDaE25d52a4D378d1D1fd5d4C9A5ce985bbdb794

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
