<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    count: {{ $store.state.count }}
    changeLoginYn: {{ $store.state.loginYn }}
    changeEmail: {{ $store.state.email }}
    <TheWelcome />
  </main>
</template>
