const express = require('express')
const app = express()
const port = 3000

let data = [
  {
  "id": "1",
  "first_name": "Massimiliano",
  "last_name": "Rosoni",
  "email": "mrosoni0@ibm.com",
  "salary": "$9.23",
  "department_id": 10,
  "job_id": "it"
},
{
  "id": "2",
  "first_name": "Rikki",
  "last_name": "Red",
  "email": "rred1@nps.gov",
  "salary": "$9.96",
  "department_id": 20,
  "job_id": "sales"
},
{
  "id": "3",
  "first_name": "Datha",
  "last_name": "Loosemore",
  "email": "dloosemore2@behance.net",
  "salary": "$6.59",
  "department_id": 30,
  "job_id": "it"
},
{
  "id": "4",
  "first_name": "길동",
  "last_name": "Loton",
  "email": "eloton3@dagondesign.com",
  "salary": "$3.38",
  "department_id": 10,
  "job_id": "it"
},
{
  "id": "5",
  "first_name": "Emmalee",
  "last_name": "Laboune",
  "email": "elaboune4@salon.com",
  "salary": "$8.40",
  "department_id": "50",
  "job_id": "sales"
}]

//전체조회 REST
app.get('/emp', (req, res) => {
  res.send(data)
})
//단건조회
app.get('/emp/:id', (req, res) => {
  let id = req.params.id
  let result = data.find(emp => emp.id == id)
                      // (function(emp){ 
                      // if(emp.id == id){
                      // return emp
                      // }})
if(result)                    
  res.send(result)
else
  res.send("not found")
})

//부서가 10번인 첫번째 사원 find?departmentId=10
app.get('/find', (req, res) => {
  let departmentId = req.query.departmentId
  const result = data.find(emp => emp.department_id == departmentId);
  if(result)                    
    res.send(result)
  else
    res.send("not found")
});
//부서가 10번인 첫번째 사원 filter?departmentId=10
// app.get('/filter', (req, res) => {
//   let departmentId = req.query.departmentId
//   const result = data.filter(emp => emp.department_id == departmentId);
//   if(result)                    
//     res.send(result)
//   else
//     res.send("not found")
// });

//job_id가 'it'인사원만 조회
app.get('/filter', (req, res) => {
  let jobId = req.query.jobId
  const result = data.filter(emp => emp.job_id == jobId);
  res.send(result);
});

//first_name 순으로 정렬
app.get('/sort', (req, res) => {
  const result = [...data].sort((a,b) => a.first_name - b.first_name);
  res.send(result);
});

app.get('/', (req, res) => {
  res.send('hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
