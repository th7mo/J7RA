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
    created: '',
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
    userStory.created = getCurrentDateString();
    store.addStory(userStory);
  }

  function getCurrentDateString() {
    const currentDate = new Date();
    const day = currentDate.getDay().toString();
    const month = currentDate.getMonth().toString();
    const year = currentDate.getFullYear().toString();
    const hour = currentDate.getHours().toString();
    const minutes = currentDate.getMinutes().toString();
    return `${day.length < 2 ? '0' : ''}${day}-${month.length < 2 ? '0' : ''}${month}-${year} ${
      hour.length < 2 ? '0' : ''
    }${hour}:${minutes.length < 2 ? '0' : ''}${minutes}`;
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

      <section class="flex justify-end">
        <BaseButton @click="emit('close')" transparent class="mt-4 mr-2" label="Cancel" />
        <BaseButton @click="createUserStory" class="mt-4" label="Create" />
      </section>
    </form>
  </BaseDialog>
</template>
