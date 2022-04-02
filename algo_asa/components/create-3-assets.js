const  algosdk  = require("algosdk");
var acct = null;

acct = algosdk.generateAccounts();
    console.log ('');
    account1 = acct.addr;
    console .log('Account 1 = ' + account1);
    var account1_memonic = algosdk.secretKeyToMnemonic(acct.sk);
    console.log ('Account 1 Mnemonic =' + account1_mnemonic);
    var recoveredAccount1 = algosdk.mnemonicToSecretKey(account1_mnemonic);
    var isvalid = algosdk.isValidAddress(recoveredAccount1.addr);
    console.log('valid address?' + isvalid);
    console.log('Account successfully created.');

    acct = algosdk.generateAccounts();
    console.log ('');
    account1 = acct.addr;
    console .log('Account 2 = ' + account2);
    var account1_memonic = algosdk.secretKeyToMnemonic(acct.sk);
    console.log ('Account 2 Mnemonic =' + account2_mnemonic);
    var recoveredAccount2 = algosdk.mnemonicToSecretKey(account1_mnemonic);
    var isvalid = algosdk.isValidAddress(recoveredAccount2.addr);
    console.log('valid address?' + isvalid);
    console.log('Account successfully created.');

    acct = algosdk.generateAccounts();
    console.log ('');
    account1 = acct.addr;
    console .log('Account 3 = ' + account);
    var account1_memonic = algosdk.secretKeyToMnemonic(acct.sk);
    console.log ('Account 3 Mnemonic =' + account1_mnemonic);
    var recoveredAccount3 = algosdk.mnemonicToSecretKey(account3_mnemonic);
    var isvalid = algosdk.isValidAddress(recoveredAccount3.addr);
    console.log('valid address?' + isvalid);
    console.log('Account successfully created.');

c