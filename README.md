# DAO

- Anyone with a CryptoDevs NFT can create a proposal to purchase a different NFT from an NFT marketplace
- Everyone with a CryptoDevs NFT can vote for or against the active proposals
- Each NFT counts as one vote for each proposal
- Voter cannot vote multiple times on the same proposal with the same NFT
- If majority of the voters vote for the proposal by the deadline, the NFT purchase is automatically executed

## Objective

- To be able to purchase NFTs automatically when a proposal is passed, you need an on-chain NFT marketplace that you can call a purchase() function on.
- Create a simplified fake NFT marketplace for this tutorial as the focus is on the DAO.
- We will also make the actual DAO smart contract using Hardhat.
- We will make the website using Next.js to allow users to create and vote on proposals

## Prerequisites

- NFT Collection
- ETH to give to the DAO Treasury

## Setup Hardhat

```bash
mkdir hardhat-tutorial
cd hardhat-tutorial
npm init --yes
npm install --save-dev hardhat
# init hardhat
npx hardhat
npm install @openzeppelin/contracts
# remove boilerplate contract
rm contracts/Lock.sol
```

## Create Contract Files

```bash
touch contracts/FakeNFTMarketplace.sol
code contracts/FakeNFTMarketplace.sol

touch contracts/CryptoDevsDAO.sol
code contracts/CryptoDevsDAO.sol
```

## Environment Variables

```bash
npm install dotenv
touch .env.example
echo 'QUICKNODE_HTTP_URL=""' >> .env.example
echo 'PRIVATE_KEY=""' >> .env.example
cp .env.example .env
# set nft contract address
mkdir constants
touch constants/index.js

code constants/index.js
code scripts/deploy.js
code hardhat.config.js
```

### Update files and deploy

```
npx hardhat compile
npx hardhat run scripts/deploy.js --network goerli
```

#

## Frontend

```bash
npx create-next-app@latest
cd my-app
# add deps
npm install web3modal ethers
# add contract addresses
mkdir constants
touch constants/index.js
# make changes
code styles/Home.modules.css
code pages/index.js
code constants/index.js
# run client
npm run dev
```
