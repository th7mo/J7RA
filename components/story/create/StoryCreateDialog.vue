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
    <header class="flex content-between">
      <h2 class="font-bold w-[40vw] text-2xl mb-8">Create User Story</h2>
      <BaseCloseButton class="float-right" @click="emit('close')" />
    </header>
    <form class="flex flex-col gap-5">
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
      <StoryCreateInput class="w-1/2" label-text="Assignee" v-model="userStory.assignee" />
      <StoryCreateInputNumber class="w-1/2" label-text="Story points" v-model="userStory.points" />

      <section>
        <BaseButton @click="createUserStory" class="float-right mt-4" label="Create" />
        <BaseButton
          @click="emit('close')"
          transparent
          class="float-right mt-4 mr-2"
          label="Cancel"
        />
      </section>
    </form>
  </BaseDialog>
</template>
