import axios  from "axios";
import React, {state,useEffect,useState} from "react";
import '../css/Transaction.css'

function transactions({address,setAddress, apiKey, setApiKey, startBlock, setStartBlock, endBlock, setEndBlock}){
    const [txlist, setTxlist] = useState([]);

    const getTransactions = async () => {
        const url = "http://localhost:8080/getTransactions";

        const responese = await axios.get(url, {
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${apiKey}`
            },
            address:address,
            apiKey:apiKey,
            startBlock:startBlock,
            endBlock:endBlock,
        });
        setTxlist(responese.data);
        setAddress('');
        setApiKey('');
        setStartBlock('');
        setEndBlock('');
    };
    
    useEffect(() => {
        getTransactions();
    },[]);


    return(
        <div className="transactions">
            {
                txlist.map((tx,idx) => {
                    return(
                        <div className="txWrapper" key={idx}>
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
    )
}

export default transactions;