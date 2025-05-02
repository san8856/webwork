const pool = require("./mysql") //index.js 생략 가능

//연결문자열 이용
// let connection = mysql.createConnection( "mysql://root:admin@localhost:3306/shop");

// 1. DB 접속 체크(생략가능) // pool 사용시 제외
// pool.connect((err) => {
//   if (err) {
//     console.log("error connection" + err.stack);
//     return;
//   }
// });
// 2. SQL 실행
const data = {
  name: "엄지",
  email: "d@d.d",
  phone: "010-999-0000"
};
sql = "insert customers (name, email, phone) values (?,?,?)";

pool.query(sql, [data.name, data.email, data.phone], function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  // 3. 결과 처리
  console.log(results);
});
// // DB 접속 종료(비동기이지만 SQL이 모두 실행되면 종료)
// connection.end(); //pool 사용할땐 필요 x