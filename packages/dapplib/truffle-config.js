require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture help olympic trip notice rival smile property harvest lobster frame stand'; 
let testAccounts = [
"0xa818a1d858373b40b9e330dfe7781fa1ae8060ba582bce4c8a97b4db88b5782a",
"0xf75297dc64f4390d13a8383ac41bfb61f54b8a551c3557505b2fcccb0f82c154",
"0xd1b8339fcf0342207b9c1aa6c9c78983ca132863a9bd82f243b4f31fc276cd54",
"0xd484ae3269e0a7946c1c14f7c95b25214cd889a98b61dda4aacdaac2379e3c5b",
"0xa1fcb96fc6e16732633c5bb389aad22f9873d9ce24d8bc20870741d4d68b5412",
"0x27813c61a3357794ce9a268a1960fa87414ede07f0eec2aad3f84613504c67eb",
"0x1e2fd477eb150be3232ff894c2184a2013d2bed70d88ce910a90962f717cf6fc",
"0xbcb9e506dbfc14f546aaa428cfc74d1b04a5ffce84f20267341349401b8246e6",
"0x20ad7b353d3da40f416535679fb0440a65f31b489bf6b960a9ee0bc95a72bf18",
"0x48f91985c8960cf38ab3919144b24e62f8a10c14024576d4b8fe78e42189e01c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


