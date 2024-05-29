## how to deploy a memecoin using mint club - $undefined tutorial

1. create a new folder in any place of your computer using mkdir, and then go into it.

```
mkdir undefined
cd undefined
```

2. create a new npm environment

```
npm init -y
```

3. install mint club sdk

```
npm i mint.club-v2-sdk
```

4. create an app.js file, and enter it on edit mode.

```
touch app.js
nano app.js
```

5. add this code to it

```
import { mintclub } from "mint.club-v2-sdk";

const Undefined = mintclub.network("base").nft("undefined");

// 🚀 Deploying $undefined tokens
await Undefined.create({
  name: "undefined",
  // Base Network $degen
  reserveToken: {
    address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
    decimals: 18,
  },
  // Bonding curve data
  curveData: {
    curveType: "EXPONENTIAL",
    stepCount: 10, // how granular the curve is. what is the range of values for this nuber? i didnt change it because i was scared of fucking it
    maxSupply: 8_888, // NFT max supply
    initialMintingPrice: 0.000001618033, // starting price, 0.01 $degen
    finalMintingPrice: 0.01618, // ending price, 0.1 $degen
    creatorAllocation: 1, // initial supply to the deployer
  },
  metadataUrl: "ipfs://QmZa6koNdaCzfcG4dN2seaWqVUfqhud8wyE9Ks765PSfbj",
});

```

6. exit nano and run node app.js
7. wait for the contract to be deployed
8. share w frens
