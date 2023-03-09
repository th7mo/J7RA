<script setup lang="ts">
import PopupOverlay from '../libs/PopupOverlay.vue'
import NewUserStoryField from './NewUserStoryField.vue';
import NewUserStoryFieldTextArea from './NewUserStoryFieldTextArea.vue';

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <PopupOverlay @close="emit('close')">
    <h2>Create User Story</h2>
    <NewUserStoryField :required="true" label-text="Summary" />
    <NewUserStoryFieldTextArea label-text="Description" place-holder="You can add a description to explain your story in detail!"/>
  </PopupOverlay>
</template>

<style scoped>
  h2 {
    @apply w-[40vw]
  }

  h2 {
    @apply text-2xl mb-8
  }
</style>
