<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';
  import useStoriesService from '~~/composables/useStoriesService';

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  const userStory = reactive<UserStory>({
    key: 1,
    summary: '',
    description: '',
  });

  const isInvalidSummary = computed(() => {
    return isCreateUserStoryButtonClicked.value && userStory.summary.trim() === '';
  });

  const isCreateUserStoryButtonClicked = ref(false);

  function createUserStory() {
    isCreateUserStoryButtonClicked.value = true;
    console.log('fefe');

    if (isInvalidSummary.value) {
      return;
    }
    emit('close');
    useStoriesService.postStory(userStory);
  }
</script>

<template>
  <BaseDialog @close="emit('close')">
    <h2>Create User Story</h2>
    <main>
      <StoryCreateInput
        required
        label-text="Summary"
        v-model="userStory.summary"
        :error="isInvalidSummary"
      />
      <StoryCreateTextArea
        label-text="Description"
        place-holder="You can enter more details here!"
        v-model="userStory.description"
        class="description"
      />

      <section>
        <BaseButton @click="createUserStory" class="button" label="Create" />
        <BaseButton
          @click="emit('close')"
          transparent
          class="button button__cancel"
          label="Cancel"
        />
      </section>
    </main>
  </BaseDialog>
</template>

<style scoped lang="scss">
  main {
    @apply flex flex-col gap-5;
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
