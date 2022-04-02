//Retrieve th token, server,  port values
const algosdk = require('algosdk');
const { default: AlgodClient } = require('algosdk/dist/types/src/client/v2/algod/algod');

//sandbox
const token ='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const server = "http://localhost";
const port = 4001;


//print the created asset for account and ID
const printCreatedAsset = async function (algodclient, account, assetid){
    let accountInfo =await algodclient.accountInformation(account).do();
    for (i=0; 1<accountInfo['created-assets'].lenght; i++){
        let scrutinizedAsset = accountInfo['created-assets'][i];
        if (scrutinizedAsset['index'] == assetid){
            console.log ('Asset ID = ' + scrutinizedAsset['index']);
            let myparms =JSON.stringify(scrutinizedAsset['params'], undefined, 2);
            console.log('parms = ' + myparms);
            break; 
        }
    }
};
const printAssetHolding= async function (algodclient, account, assetid){
    let accountInfo =await algodclient.accountInformation(account).do();
    for (i=0; 1<accountInfo['assets'].lenght; i++){
        let scrutinizedAsset = accountInfo['assets'][i];
        if (scrutinizedAsset['asset-id'] == assetid){
            console.log ('Asset ID = ' + scrutinizedAsset['index']);
            let myparms =JSON.stringify(scrutinizedAsset['params'], undefined, 2);
            console.log('parms = ' + myparms);
            break; 
        }
    }
};


//Here you would paste the mnemonic for the 3 previously genearted accounts
var account1_memonic = "device include term course erode love theme reward turn brass chimney call laundry income false crisp bracket order fantasy exhaust become dune hand above we";
var account2_mnemonic = "engine feature toast include normal van combine velvet vocal chief bleak detail glide great speak style erupt mercy hold begin provide good dress abstract empower";
var account3_mnemonic = "city sun tray pistol anger robust wool vibrant observe agent blouse fork library glue skull satoshi mixed tent raise slogan park edit volcano able between";


var recoveredAccount1 = algosdk.mnemonicToSecretKey (acount1_mnemonic);
var recoveredAccount2 = algosdk.mnemonicToSecretKey (acount2_mnemonic);
var recoveredAccount3 = algosdk.mnemonicToSecretKey (acount3_mnemonic);


console.log ('Account 1: '+ recoveredAccount1.address);
console.log ('Account 2: '+ recoveredAccount2.address);
console.log ('Account 3: '+ recoveredAccount3.address);

//Instantiate the algod wrapper
let algodclient =new algosdk.Algodv2(token.server,port);

(async () => {
//Asset creation
let params =await algodclient.getTransactionParams().do ();
params.fee = 1000;
params.flatfee =true
console.log (params);
//The note is arbitarary data to be stored in the transaction

let note = "This is just a note";
//The follwoing parameters are assets specific:
let addr = recoveredAccount1.addr;
//will user accounts need to be unfrozen before transacting?
let defaultfroxen = false;
//Number of decimal for asset unit
let deimals = 0;
//total amount of asset
let totalIssuamce = 1000000;
// asset symbol
let unitName =MCA
//asset name
let asstName = "MCA Token";
//optional string pointing to a URL relating to assets
let assetURL = 'https://mcasoftwaresolutions.com';
//optional hash commoitment relating to the assets (32 char length)
let assetMetadatHash = "";
//The following parameters are the only ones that can be changed by the manager.
//Specified address can change reserver, freeze, clawback, and the asset manager.
let manager = recoveredAccount2.addr;
let reserve =  recoveredAccount2.addr;
//freeze:address can be freeze or unfreeze user asset holdings
let freeze = recoverAccount2.addr
// clawback: address can revoke user asset and send them to other address
let clawback = recoveredAccount2.addr;

//sign and broadcast 'txn' allows 'adde' to create asset.
let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
    addr,note,
    totalIssuance,
    decimals,
    defaultFrozen,
    manager,
    reserve,
    freeze,
    clawback,
    unitName,
    assetName,
    assetURL,
    assetMetadataHash,
    params
);
let rawSignedTnn = txn.signTxn(recoveredAccount1.sk);
let tx = await algodclient.sendRawTransaction(rawSignedTxn);

let assetID =null;
//wait for the transaction to be confirmed
const ptx = await algosdk.waitForConfirmation(AlgodClient,tx.txid,4);
//get completed transaction
console.log('Transaction' + tx.tsId + 'confirmed in round' +ptx['confirmed-round']);

await printCreatedAsset(algodclient , recoveredAccount1.addr, assetID);
await printAssetHolding(algodclient , recoveredAccount1.addr,assetID);





})