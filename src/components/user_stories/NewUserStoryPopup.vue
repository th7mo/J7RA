<script setup lang="ts">
import { stringLiteral } from '@babel/types';
import { reactive } from 'vue';
import PopupOverlay from '../libs/PopupOverlay.vue'
import TheButton from '../libs/TheButton.vue'
import NewUserStoryField from './NewUserStoryField.vue'
import NewUserStoryFieldTextArea from './NewUserStoryFieldTextArea.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const userStory = reactive({
  summary: '',
  description: '',
})

function createUserStory() {
  console.log(userStory);
  
}
</script>

<template>
  <PopupOverlay @close="emit('close')">
  <h2>Create User Story</h2>
    <main>
      <NewUserStoryField :required="true" label-text="Summary" v-model="userStory.summary"/>
      <NewUserStoryFieldTextArea 
        label-text="Description" 
        place-holder="You can enter more details here!" 
        v-model="userStory.description" 
        class="description" 
      />

      <section>
        <TheButton @click="createUserStory" class="button">Create</TheButton>
        <TheButton @click="emit('close')" :filled="false" class="button button__cancel">Cancel</TheButton>
      </section>
    </main>
  </PopupOverlay>
</template>

<style scoped lang="scss">
  main {
    @apply flex flex-col gap-5
  }

  h2 {
    @apply w-[40vw] text-2xl mb-8;
  }

  .button {
    @apply float-right mt-4;

    &__cancel {
      @apply mr-2;
    }
  }
</style>
