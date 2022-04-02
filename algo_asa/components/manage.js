// chnage the manager of the assets using asset configuration transaction.
//Instantiate the algod wrapper
let algodclient =new algosdk.Algodv2(token.server,port);
const { default: algosdk } = require("algosdk");

//sandbox
const token ='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const server = "http://localhost";
const port = 4001;

const { default: AlgodClient } = require("algosdk/dist/types/src/client/v2/algod/algod");

params = await AlgodClient.getTransactionParams().do ();
params.fee =1000;
params.flatFee = true;

//Assets configuration specific parameter
//Account can manage,reserve, freeze, clawback.
manager =recoveredAccount1.addr;

//Note that this change must come fromthe current asset manager.

//makeAssetConfigTxnWithSuggestedParams can be issued by the asset manager to change the manager, 
//reserve, freeze, or clawback you must respecify existing addresses to keep them the same; leaving a 
//field blank is the same as turning that feature off for this asset
let ctxn =algosdk.makeAssetConfigTxnWithSuggestedParams(
    recoverdAccount2.addr,
    note,
    asseID,
    manager,
    reserve,
    freeze,
    clawback,
    params,
);
//this txn must be signed by the current manager.
rawSignedTxn =ctx.signTxn(recoveredAccount2.sdk);
let ctx = await algodclient.sendeRawTransaction(rawSignedTxn).do();
//wait for the confirmation
let confirmation = await algosdk.waitForConfirmation(
    algodclient,
    ctx.txid,
    4
);
console.log('Transaction' + ctx.txId + ' confirmed in round')+ confiremdTxn ['confirmed-round'];

//get the asset information for the newly changed transaction
//note:the manager account should now be the same as the creator's account.
await printCreatedAsset(algodclient , recoveredAccount1.addr , assetID);
)