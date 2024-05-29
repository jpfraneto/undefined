import { mintclub } from "mint.club-v2-sdk";

const Undefined = mintclub.network("base").nft("undefined");

// 🚀 Deploying $undefined tokens
await Undefined.create({
  name: "undefined",
  // Base Network WETH
  reserveToken: {
    address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
    decimals: 18,
  },
  // Bonding curve data
  curveData: {
    curveType: "EXPONENTIAL",
    stepCount: 10, // how granular the curve is
    maxSupply: 8_888, // NFT max supply
    initialMintingPrice: 0.000001618033, // starting price, 0.01 WETH
    finalMintingPrice: 0.01618, // ending price, 0.1 WETH
    creatorAllocation: 1, // initial supply to the deployer
  },
  metadataUrl: "ipfs://QmZa6koNdaCzfcG4dN2seaWqVUfqhud8wyE9Ks765PSfbj",
});
