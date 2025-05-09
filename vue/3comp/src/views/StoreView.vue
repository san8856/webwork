<template>
  <h2>count: {{ count }}</h2>
  <h2>name: {{ name }}</h2>
  <h2>userid: {{ userid }}</h2>
  <h2>grade: {{ grade }}</h2>
  <button class="btn-success" @click="increment">증가</button>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";
import { useUserStore } from "@/stores/user";
export default {
  computed: {

    //computed()는 getters 프로퍼티가 됨.
    ...mapState(useCounterStore, ["name", "count"]),
    ...mapState(useUserStore, ["userid", "grade"]),
  },
  //methods function()은 actions 프로퍼티가 됨.
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
  },
};
</script>