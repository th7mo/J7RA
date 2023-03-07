<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  required?: boolean
  labelText: string
}

withDefaults(defineProps<Props>(), {
  required: false
})

const userInput = ref('')
</script>

<template>
  <label for="userInput">{{ labelText }} <span>{{ required ? '*' : '' }}</span></label>
  <input v-model="userInput" type="text" id="userInput">
</template>

<style scoped>
  input, label {
    @apply block
  }

  label {
    @apply text-sm text-gray-600 pl-0.5
  }

  input[type="text"] {
    @apply outline-none border-gray-200 border-2 rounded-sm p-1 w-full
  }

  input[type="text"]:focus {
    @apply border-blue-500 border-2 
  }   

  span {
    @apply text-red-600 font-bold 
  }
</style>
