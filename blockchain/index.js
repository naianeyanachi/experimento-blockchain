const express = require('express');
const app = express();
const port = 3001;

const contract = require('./constants/contract');
const address = contract.address;
const ABI = contract.ABI;

const Web3 = require('web3');
const rpcURL = "http://localhost:8545";
const web3 = new Web3(rpcURL);

const Token = new web3.eth.Contract(ABI, address)

app.get('/contract/totalSupply', (req, res) => {
    Token.methods.totalSupply().call()
    .then(supply => res.json(supply))
    .catch(err => res.json(err));
});

app.get('/contract/balance', (req, res) => {
    const account = req.query.account;
    Token.methods.balanceOf(account).call()
    .then(balance => res.json(balance))
    .catch(err => res.json(err));
})

app.post('/contract/mint', (req, res) => {
    Token.methods.mint('0x5745E432305bc875743BE0F492D402f7DA922C5d', 1000).send({from:'0x7faA2a8587d7eBBD7820546081661315BA44D05D'})
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

app.listen(port, () => console.log('Server ready'));