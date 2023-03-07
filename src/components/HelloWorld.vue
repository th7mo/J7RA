<script setup lang="ts">
import { ref } from 'vue';
import Card from './Card.vue';

const counter = ref(0)

function increaseCounter() {
  counter.value++
}
</script>

<template>
  <Card title="Primary Text" sub-text="A short description" />
  <!-- <button @click="increaseCounter">Count is: {{ counter }}</button> -->
</template>

<style scoped>
Card {
  @apply pl-4
}

button {
  @apply ml-2 p-2 text-gray-100 bg-blue-900 rounded-3xl text-2xl block
}
</style>
