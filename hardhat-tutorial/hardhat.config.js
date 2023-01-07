require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// FakeNFTMarketplace deployed to:  0xD5EbA88e394ff7567F98f998F00139F7cf2f15c2
// CryptoDevsDAO deployed to:  0xebF3cC5bDE5A101a81E17Be8bf40Cce1455d259C

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
