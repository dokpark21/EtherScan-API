import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Transaction.css'

function Contracts({ contractAddress, setContractAddress, apiKey, setApiKey }) {
  const [abi, setAbi] = useState('');
  console.log(abi);
  

  const getTransaction = async () => {
    const url = `http://localhost:8080/getContract`;
    const response = await axios.post(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${apiKey}`
      },
      contractAddress: contractAddress,
      apiKey: apiKey
    });
    setAbi(response.data);
    setContractAddress('');
    setApiKey('');
  }

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div className='transaction'>
      {/* {
        contractAddress.map((ca, index) => {
          return (
            <div className='txWrapper' key={index}>
              {ca}
            </div>
          )
        })
      } */}
      {abi}
    </div>
  );
}

export default Contracts;