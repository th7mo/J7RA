<script setup lang="ts">
import { ref } from 'vue'
import NewUserStoryLabel from './NewUserStoryLabel.vue'

interface Props {
  labelText: string
  required?: boolean
  placeHolder?: string
  rows?: number
}

withDefaults(defineProps<Props>(), {
  rows: 4,
  required: false
})

const userInput = ref('')
</script>

<template>
  <NewUserStoryLabel :required="required" :label-text="labelText"/>
  <textarea :rows="rows" v-model="userInput" :placeholder="placeHolder"></textarea>
</template>

<style scoped>
  textarea {
    @apply box-border outline-none border-gray-200 border-2 rounded-sm p-1 w-full resize-none
  }
</style>
