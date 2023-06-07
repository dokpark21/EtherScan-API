import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Balance({ address, setAddress, apiKey, setApiKey }) {
  const [balance, setBalance] = useState('');
  

  const getBalance = async () => {
    const url = `http://localhost:8080/getBalance`;
    const response = await axios.post(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${apiKey}`
      },
        address: address,
        apiKey: apiKey
    });
    setBalance(response.data);
    setAddress('');
    setApiKey('');
  }

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div>
      <p>Balance: {balance} ETH</p>
    </div>
  );
}

export default Balance;