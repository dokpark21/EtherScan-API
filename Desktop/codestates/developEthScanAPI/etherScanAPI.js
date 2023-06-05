const express = require("express");
const app = express();
const port = 8080;
const Web3 = require("web3");

function getWeb3(){
    const web3 = new Web3("https://mainnet.infura.io/v3/34c821056a4443e69c731a619f706828"); //web3 라이브러리에 infura로 제공자 설정
    return web3;
}

async function getAccounts(account){ //계정정보 가져오기(아직은 balance정도만)   
   let bal = await getWeb3.eth.getBalance(account)
   return bal; 
}


async function getTransaction(){ //트랜잭션정보 가져오기

}


async function getContract(){ //컨트랙트 정보가져오기

}

app.get('/getAccounts', (req,res) => { //callback 함수, 정보를 가져와 res에 담아 응답만 해주면 되기 떄문에 get 사용
    const {module,action,address,tag} = req.body; 
    if (module==="account"){ //계좌 관련 모듈
        if (action==="balance"){ //잔액조회 액션
            getAccounts(address)
                .then((bal) => { //promise 형식이기 때문에 .then사용
                    res.send(bal);
                })
        }
    }
})

app.listen(port,()=> {
    console.log("server Listning...");
})