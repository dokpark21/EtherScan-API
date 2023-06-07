import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Transaction.css'

function Transactions({ address, setAddress, startBlock, setStartBlock, endBlock, setEndBlock, apiKey, setApiKey }) {
  const [transaction, setTransaction] = useState([]);
  console.log(transaction);
  

  const getTransaction = async () => {
    const url = `http://localhost:8080/getTransaction`;
    const response = await axios.post(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${apiKey}`
      },
      address: address,
      startBlock: startBlock,
      endBlock: endBlock,
      apiKey: apiKey
    });
    setTransaction(response.data);
    setAddress('');
    setStartBlock('');
    setEndBlock('');
    setApiKey('');
  }

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div className='transaction'>
      {
        transaction.map((tx, index) => {
          return (
            <div className='txWrapper' key={index}>
              <p>BlockNumber: {tx.blockNumber}</p>
              <p>TimeStamp: {tx.timeStamp}</p>
              <p>Hash: {tx.hash}</p>
              <p>Nonce: {tx.nonce}</p>
              <p>TransactionIndex: {tx.transactionIndex}</p>
              <p>From: {tx.from}</p>
              <p>To: {tx.to}</p>
              <p>Value: {tx.value}</p>
              <p>Gas: {tx.gas}</p>
              <p>GasPrice: {tx.gasPrice}</p>
              <p>isError: {tx.isError}</p>
              <p>TxReceipt_Status: {tx.txreceipt_status}</p>
              <p>
                Input: {
                  tx.input < 50
                  ? tx.input
                  : tx.input.slice(0, 35) + '...'
                }
              </p>
              <p>ContractAddress: {tx.contractAddress}</p>
              <p>CumulativeGasUsed: {tx.cumulativeGasUsed}</p>
              <p>GasUsed: {tx.gasUsed}</p>
              <p>Confirmations: {tx.confirmations}</p>
              <p>MethodId: {tx.methodId}</p>
              <p>FunctionName: {tx.functionName.length == 0 ? '' : tx.functionName}</p>
            </div>
          )
        })
      }

    </div>
  );
}

export default Transactions;