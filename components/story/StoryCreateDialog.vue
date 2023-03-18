<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';
  const store = useStoryStore();

  const emit = defineEmits(['close']);

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
  <BaseDialog @close="emit('close')">
    <template v-slot:header>
      <h2 class="font-bold w-[40vw] text-2xl mb-8">Create User Story</h2>
    </template>
    <template v-slot:main>
      <form class="flex flex-col">
        <BaseInput
          required
          label-text="Summary"
          v-model="userStory.summary"
          :error="isInvalidSummary"
          class="mb-3"
        />
        <BaseTextArea
          label-text="Description"
          place-holder="You can enter more details here!"
          v-model="userStory.description"
          class="description mb-3"
        />
        <li class="grid grid-cols-2">
          <div>
            <BaseInput class="mb-3" label-text="Assignee" v-model="userStory.assignee" />
          </div>
          <EpicDropdown :story="userStory" class="ml-auto mt-5" />
        </li>

        <BaseInputNumber class="w-1/2" label-text="Story points" v-model="userStory.points" />

        <section class="flex justify-end">
          <BaseButton @click="emit('close')" transparent class="mt-4 mr-2" label="Cancel" />
          <BaseButton @click="createUserStory" class="mt-4" label="Create" />
        </section>
      </form>
    </template>
  </BaseDialog>
</template>
