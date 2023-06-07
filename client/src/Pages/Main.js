import React, { useState } from 'react';
import '../css/Main.css';
import Balance from '../component/Balance';
import Transactions from '../component/Transactions';
import Contracts from '../component/Contracts';

function Main () {
  const [showBalance, setShowBalance] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const [showContract, setShowContract] = useState(false);
  const [address, setAddress] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [startBlock, setStartBlock] = useState('');
  const [endBlock, setEndBlock] = useState('');
  const [contractAddress, setContractAddress] = useState('');

  const addressChange = (event) => {
    setAddress(event.target.value);
  }

  const apiKeyChange = (event) => {
    setApiKey(event.target.value);
  }

  const startBlockChange = (event) => {
    setStartBlock(event.target.value);
  }

  const endBlockChange = (event) => {
    setEndBlock(event.target.value);
  }

  const contractChange = (event) => {
    setContractAddress(event.target.value);
  }
  

  const handleButtonClick = async (e) => {
    console.log(e.target.className)
    if(e.target.className === 'balanceBtn') {
      setShowBalance(true);
    } else if(e.target.className === 'transactionBtn') {
      setShowTransactions(true);
    } else if(e.target.className === 'contractBtn') {
      setShowContract(true);
    }
  }


  return (
    <div className='main'>
      <div className='inputWrapper'>
        <div>
          <p>지갑 주소 :</p>
          <input type="text" value={address} onChange={addressChange} />
        </div>
        <div>
          <p>API KEY : </p>
          <input type="text" value={apiKey} onChange={apiKeyChange} />
        </div>
        <div>
          <p>시작 블록 : </p>
          <input type="text" value={startBlock} onChange={startBlockChange} />
        </div>
        <div>
          <p>마지막 블록 : </p>
          <input type="text" value={endBlock} onChange={endBlockChange} />
        </div>
        <div>
          <p>컨트랙트 주소 : </p>
          <input type="text" value={contractAddress} onChange={contractChange} />
        </div>
      </div>
      <div>
        {showBalance && <Balance address={address} setAddress={setAddress} apiKey={apiKey} setApiKey={setApiKey} />}
        {showTransactions && 
          <Transactions 
          address={address} 
          setAddress={setAddress} 
          startBlock={startBlock}
          setStartBlock={setStartBlock}
          endBlock={endBlock}
          setEndBlock={setEndBlock}
          apiKey={apiKey} 
          setApiKey={setApiKey} />
        }
        {showContract && 
          <Contracts 
          contractAddress={contractAddress} 
          setContractAddress={setContractAddress} 
          apiKey={apiKey} 
          setApiKey={setApiKey} />
        }
      </div>
      <div className='btnWrapper'>
        <div>
          <button className='balanceBtn' onClick={handleButtonClick}>Get Balance</button>
        </div>
        <div>
          <button className='transactionBtn' onClick={handleButtonClick}>Get Transactions</button>
        </div>
        <div>
          <button className='contractBtn' onClick={handleButtonClick}>Get Contracts</button>
        </div>
      </div>
    </div>
  );
}

export default Main;