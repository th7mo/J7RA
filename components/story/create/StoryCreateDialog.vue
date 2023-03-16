<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';
  const store = useStoryStore();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  const userStory = reactive<UserStory>({
    key: 1,
    summary: '',
    description: '',
    progress: 'To Do',
    points: undefined,
    assignee: undefined,
  });

  const isInvalidSummary = computed(() => {
    return isCreateUserStoryButtonClicked.value && userStory.summary.trim() === '';
  });

  const isCreateUserStoryButtonClicked = ref(false);

  function createUserStory() {
    isCreateUserStoryButtonClicked.value = true;

    if (isInvalidSummary.value) {
      return;
    }
    emit('close');
    store.addStory(userStory);
  }
</script>

<template>
  <BaseDialog @click="emit('close')" capped-width>
    <header>
      <h2>Create User Story</h2>
      <BaseCloseButton class="close-button" @click="emit('close')" />
    </header>
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
      <StoryCreateInput label-text="Assignee" v-model="userStory.assignee" />

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
  header {
    @apply flex content-between;
  }

  .close-button {
    @apply float-right;
  }

  main {
    @apply flex flex-col gap-5;
  }

  h2 {
    @apply font-medium w-[40vw] text-2xl mb-8;
  }

  .button {
    @apply float-right mt-4;

    &__cancel {
      @apply mr-2;
    }
  }
</style>
