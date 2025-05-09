<template>
  <h2>count: {{ count }}</h2>
  <h2>name: {{ name }}</h2>
  <button class="btn-success" @click="CounterStore.increment">증가</button>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const CounterStore = useCounterStore();

const {name,count} = storeToRefs(CounterStore);

</script>