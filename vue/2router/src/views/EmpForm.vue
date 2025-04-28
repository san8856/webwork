<script>
export default{
      data() {
        return {
          depts : [ {dno:10, dname:"개발"},
                    {dno:20, dname:"인사"},
                    {dno:30, dname:"총무"} ],
          emp: {
            employee_id : "100",
            first_name : "길동",
            last_name : "홍",
            email : "",
            phone_number : "",
            hire_date : "",
            job_id : "",
            salary : "",
            commission_pct : "",
            manager_id : "",
            department_id : "20"
          }
        }
      },
      methods: {
        empUpdate(){
          console.log(JSON.stringify(this.emp));
          fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
        }
      }
    }
</script>
<template>
  <div class="card" style="width: 20rem;">
    <div class="card-body">
      <table>
        <tr>
          <td>사번 :</td>
          <td><input v-model="emp.employee_id"></td>
        </tr>
        <tr>
          <td>fname :</td>
          <td><input v-model="emp.first_name"></td>
        </tr>
        <tr>
          <td>jobid : {{ emp.job_id }}</td>
          <td>
            <input type="radio" v-model="emp.job_id" value="it"> IT
            <input type="radio" v-model="emp.job_id" value="sales"> SALES
          </td>
        </tr>
        <tr>
          <td>부서 :</td>
          <td>
            <select v-model="emp.department_id">
              <option v-for="dept in depts" :value="dept.dno">{{ dept.dname }}</option>
            </select>
          </td>
        </tr>
      </table>
      <button @click="empUpdate()">수정</button>
    </div>
  </div>
</template>

<style>

</style>