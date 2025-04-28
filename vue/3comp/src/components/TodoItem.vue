<template>
<ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="deleteTodo(todo)">X</button>
    </li>
  </ul>
</template>
<script>
export default{
  props: {
    todos: Array
  },
  methods:{
    deleteTodo(todo){
      this.$emit('remove', todo);
    }
  }
}
</script>