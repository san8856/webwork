/*
*   app_mysql.js
*/
const express = require('express');

require("dotenv").config({path:"./mysql/.env"});

const app = express();//인스턴스 생성
const port = 3000;

//cors
const cors = require('cors')
app.use(cors());

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//라우트 설정
        //  / -> 엔드포인트
app.get("/", (req,res) => {
  res.send("hello");
})
// app.get("/customer", (req, res) => {
//   const sql = "select * from customers";
//   query(sql, null, (err,result)=>{
//     if(err) console.log(err);
//     res.send(result);   //()=>{} = 비동기- callback 함수 - send가 쿼리가 실행 된 후 결과를 넘겨받아야함 -> 함수 안으로 넣어줌
//   }) 
// }); //promise 만듦-index.js
app.use("/board", require("./routes/board"));
app.use("/customer", require("./routes/customer"));


app.listen(port, () => {
  console.log(`http://localhost:${port} 서버 실행됨`);
});