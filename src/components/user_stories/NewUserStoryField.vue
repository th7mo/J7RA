<script setup lang="ts">
import { ref } from 'vue'
import NewUserStoryLabel from './NewUserStoryLabel.vue'

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
  <NewUserStoryLabel :required="required" :label-text="labelText"/>
  <input v-model="userInput" type="text">
</template>

<style scoped>
  input {
    @apply block
  }

  input[type="text"] {
    @apply outline-none border-gray-200 border-2 rounded-sm p-1 w-full
  }

  input[type="text"]:focus {
    @apply border-blue-500 border-2 
  }   
</style>
 