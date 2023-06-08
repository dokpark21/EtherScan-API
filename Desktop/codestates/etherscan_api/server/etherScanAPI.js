const express= require("express");
const Web3 = require("web3");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json()); //만약 body-parser가 없다면 req.body는 undefined가 된다, body-parser는 express안에 내장
app.use(express.urlencoded({extended: false}));

const endpoint = 'https://api-sepolia.etherscan.io/api?module=account';


//현재 잔액 조회
app.post('/getBalance', async (req,res) => {
    //필요한 것: address apiKey
    const address = req.body.address;
    const apiKey = req.body.apiKey;

    try{
        const response = await axios.get(`${endpoint}&action=balance&address=${address}&tag=latest&apiKey=${apiKey}`);
        console.log(response);    
        const Wei = response.data.result;
        const balance = await Web3.utils.fromWei(Wei,"ether");
        res.status(200).send(balance);
    }catch(e){
        console.log(e);
        res.status(500).send("Server Error!!");
    }
})


//주소로 해당 지갑주소의 트랜잭션들 불러오기
app.post('getTransactions', async (req,res) => {
    //필요한 것 : action, address, startBlock, endBlock, apiKey
    const address = req.body.address;
    const apiKey = req.body.apiKey;
    const startBlock = req.body.startBlock;
    const endBlock = req.body.endBlock;

    try{
        const response = await axios.get(`${endpoint}&action=txlist&address=${address}&startblock=${startBlock}&endblock=${endBlock}&page=1&offset=10&sort=asc&apikey=${apiKey}`);
        const txlist = response.data.result;
        res.status(200).send(txlist);
    }catch(e){
        console.log(e);
        res.status(500).send("Server Error!!");
    }
})

app.listen(port,()=> {
    console.log("Listening...");
})

