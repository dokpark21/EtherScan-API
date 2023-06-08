import React, { useState } from 'react';
// import '../css/Main.css';
import Balance from '../component/Balance';
import Transactions from '../component/Transaction';

function Main(){
    const [showBalance, setShowBalance] = useState(false);
    const [showTransactions, setShowTransactions] = useState(false);
    const [address,setAddress] = useState('');
    const [apiKey,setApiKey] = useState('');
    const [startBlock, setStartBlock] = useState('');
    const [endBlock,setEndBlock] = useState('');

    //클라이언트에 정보를 입력할 떄 정보를 변경해주는 역할
    const changeAddress = (e) =>{
        setAddress(e.target.value);
    }

    const changeApiKey = (e) =>{
        setApiKey(e.target.value);
    }

    const changeStartBlock = (e) => {
        setStartBlock(e.target.value);
    }

    const changeEndBlock = (e) => {
        setEndBlock(e.target.value);
    }

    //어떤 버튼을 눌렸냐에 따라 처리
    const handleButtonClick = (e) => {
        console.log(e.target.value);
        if (e.target.className === "balanceBtn"){
            setShowBalance(true);
        }else if (e.target.className === "transactionsBtn"){
            setShowTransactions(true);
        }
    }

    return(
        <div className='main'>
            <div className='inputWrapper'>
                <div>
                    <p>지갑주소 :</p>
                    <input type='text' onChange={changeAddress}></input>
                </div>   
                <div>
                    <p>ApiKey :</p>
                    <input type='text' onChange={changeApiKey}></input>
                </div>
                <div>
                    <p>블록시작 :</p>
                    <input type='text' onChange={changeStartBlock}></input>
                </div>
                <div>
                    <p>블록마지막 :</p>
                    <input type='text' onChange={changeEndBlock}></input>
                </div>   
            </div>
            <div>
                {showBalance && <Balance address={address} setAddress={setAddress} apiKey={apiKey} setApiKey={setApiKey}/>}
                {showTransactions && <Transactions
                address={address}
                setAddress={setAddress}
                apiKey={apiKey}
                setApiKey={setApiKey}
                startBlock={startBlock}
                setStartBlock={setStartBlock}
                endBlock={endBlock}
                setEndBlock={setEndBlock}
                />}
            </div>
            <div className='btnWrapper'>
                    <div>
                        <button className='balanceBtn' onClick={handleButtonClick}>SHOW Balance</button>
                    </div>
                    <div>
                        <button className='transactionsBtn' onClick={handleButtonClick}>SHOW Transactions</button>
                    </div>
            </div>        
        </div>
    )
}

export default Main;