require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile proof hunt option bone tank'; 
let testAccounts = [
"0xd6f289a6004cb4852fa387f885a5ef096de7dde33462519c3bc75ba92339a5d5",
"0xcc3721c61921c0568be269eb15f8f6e98c0e5d215b452de961f6a9c750bcfdb1",
"0x5bc5f1cd8a3f78c634950c27a1465f1ca54806fc283f4ac3e470e6c821dfaad0",
"0xb9adf806fc11b51cec832d70004267db628b1ae64660c3a3400db02a5cb9ddd7",
"0xe0100118d74dadd66da84615ebc61b019803c733cdee82bea08dc4b065655f56",
"0xe601bafd515725bdcf36991270f13d9382ac7262455fcbf96a217fcd8d11f6f2",
"0x2afdc5a7c015642bfa6408078800d822e5cdad70ca46315667dd4face9539d9e",
"0x81bb982d53d20f0996a1eeae7ad6e74f470be37a1d108e56a92c27f06d644bf1",
"0xcdb516cdc5d108fad65c401f6373488bc5499ff1a9ead467c7898d7af9e0b663",
"0x51e00d2f3296e0454a29185ffecd04f4dcb528ca6387c373f7b0b54afacbdfc1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


