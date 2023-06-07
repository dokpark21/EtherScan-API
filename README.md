# Etherscan API Sprint

[Etherscan API docs - Goerli](https://docs.etherscan.io/v/goerli-etherscan/)  
하단의 server를 꼭 실행해야 React에서 계정에 대한 정보 조회 가능합니다.  

---

## Client - React.js
```bash
$ cd client
```
```bash
$ npm install or yarn install
```
```bash
$ npm start or yarn start
```
![메인페이지](https://github.com/KimSeoYeon23/etherscan_api_sprint/assets/115128505/fa124e9e-946a-44bf-a3eb-c6621051d8df)
<br/>
**Get Balance**  
`지갑 주소 : ` 메타마스크 지갑 주소 입력  
`API KEY : ` Etherscan API KEY 입력
> GetBalance 버튼 클릭  

<br/>
<br/>

**Get Transactions**  
`지갑 주소 : ` 메타마스크 지갑 주소 입력  
`API KEY : ` Etherscan API KEY 입력  
`시작 블록 : ` 블록 숫자로 이루어진 블록 범위 값 `startBlock`  
`마지막 블록 : ` 블록 숫자로 이루어진 블록 범위 값 `endBlock`  
> Get Transactions 버튼 클릭

<br/>
<br/>

---
*현재 수정 중*  
**Get Contracts**  
`API KEY : ` Etherscan API KEY 입력  
`컨트랙트 주소 : ` 배포 완료된 컨트랙트 주소 입력
> Get Contracts 버튼 클릭
---

<br/>
<br/>

## Server - Node.js + Express  

<br/>

```bash
$ cd server
```
```bash
$ npm install or yarn install
```

**Node.js Server Start - localhost:8080**
```bash
$ npm start or yarn start
```
