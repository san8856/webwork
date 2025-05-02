const express = require('express')

const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'c:/temp/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })

//express instance 생성
const app  = express()
const port = 80;



//body parse
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

let boards = [
  {id:1, title:"제목", content:"내용"},
  {id:2, title:"타이틀", content:"콘텐츠"}
] // id, title, content

//로그 미들웨어 morgan
const morgan = require('morgan')
app.use(morgan('[:date[iso]] :method :url :remote-addr :referrer'))

//라우트 설정
app.get('/download', (req, res, next) => {
  const filepath = 'C:/temp/uploads/dog.jpeg';  
  const downname = 'look.text';
  // res.setHeader('Content-Type','text/plain')
  res.setHeader('Content-Disposition', `attachment; filename=${downname}`);
  res.sendFile(filepath);
});  

app.post('/profile', upload.single('avatar'), function (req, res) {
  console.log(req.file.size)
  console.log(req.file.filename)
  console.log(req.file.originalname)
  res.send("ok")
})

app.get('/' , (req,res)=>{
  res.send("hola!");
})

//전체조회          (req,res)=>{} = 라우트핸들러
app.get('/board' , (req,res)=>{
  res.send(boards);
})
//boomerang 에서 조회
//단건조회

//등록
app.post('/board' , (req,res)=>{
  const board = req.body; //VO {}  
  boards.push(board);
  console.log("받은 파라미터", board);
  res.send(board);
})
//수정
app.put('/board/:id' , (req,res)=>{
  const id = req.params.id
  const board = req.body; //json, form-data
  //find -> index번호찾아서
  const idx = boards.findIndex(ele => ele.id == id)
  if(idx >= 0) {
    boards[idx] = board;
    res.send(boards)
  } else {
    res.send("not found")
  }
})
  //삭제
  // app.delete('/board/:id' , (req,res)=>{
  //   const id = req.params.id
  //   const idx = boards.findIndex(ele => ele.id == id)
  //   if(idx >= 0){
  //     boards.splice(idx,1)
  //     res.send(boards)
  //   } else {
  //     res.send("not found")
  //   }
  // })
  app.delete('/board/:id' , (req,res)=>{
  const id = req.params.id
  const idx = boards.findIndex(ele => ele.id == id)
  if(idx >= 0){
    boards = boards.filter(ele => ele.id != id)
    res.send(boards)
  } else {
    res.send("not found")
  }
})

let emps = [ {id:0, name: "길동"},{id:1, name:"순신"} ]
//route() 같은 리소스(url)를 method 타입별로 묶어서 라우트 지정
app.route("/emp")
  .get( (req,res) => {res.send(emps)} )
 // .get( (req,res) => {res.send(emps[ req.query.id])} )
  .post( (req,res) => {res.send(req.body)} )
  .put( (req,res) => {res.send(req.body)} )
  .delete( (req,res) => {res.send( req.body.id )} )

//router를 이용하여 모듈(파일)을 분리하여 리소스별로 라우트 지정
app.use( '/product', require('./routes/product'))


app.use( '/dept', require('./routes/dept'))



























app.listen(port, ()=>{
  console.log(`http://localhost:${port} 서버 실행됨`)
});
