import axios  from "axios";
import React, {state,useEffect,useState} from "react";
        //부모 컴포넌트에서 필요핟 변수 및 변수할당 함수 전달 받기
 function balance({address, setAddress, apiKey, setApikey}){
    const [balance,setBalance] = useState('');

    const getBalance = async () => {

    const url = "http://localhost:8080/getBalance";
    const response = axios.get(url,{
        header:{
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${apiKey}`
        },
        address: address,
        apikey: apiKey
    });
    setBalance(response.data); //받은 잔액정보를 잔액으로 설정
    setAddress('');
    setApikey('');
    }

    useEffect(() => {  //함수 외부에 영향을 주는 함수
        getBalance();
    },[]);

    return (
        <div>
            <p>Balance: {balance}</p>
        </div>
    )
}

export default balance;