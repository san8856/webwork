
<script>
import axios from 'axios';
export default{
  data(){
    return {emps : []}
  },
  mounted(){
    axios.get("/empdata.json")
    .then(res=>this.emps = res.data);
  }
}
</script>
<template>
  <table>
    <tr>
      <th>사원번호</th>
      <th>이름</th>
      <th>성</th>
      <th>이메일</th>
      <th>급여</th>
    </tr>
    <tr v-for="emp in emps">
      <td>{{ emp.employee_id }}</td>
      <td>{{ emp.first_name }}</td>
      <td>{{ emp.last_name }}</td>
      <td>{{ emp.email }}</td>
      <td>{{ emp.salary }}</td>
    </tr>
  </table>
</template>
