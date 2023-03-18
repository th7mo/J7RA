<script setup lang="ts">
  const storyStore = useStoryStore();
  const epicStore = useEpicStore();

  onBeforeMount(() => {
    storyStore.fetchStories();
    epicStore.fetchEpics();
  });

  function closeEditingDialog() {
    storyStore.saveStories();
    storyStore.setIsEditingStory(false);
    storyStore.setCurrentStory(undefined);
  }
</script>

<template>
  <TheHeader />
  <StoryCreateDialog
    v-if="storyStore.getIsCreatingStory"
    @close="storyStore.setIsCreatingStory(false)"
  />

  <EpicCreateDialog v-if="epicStore.isCreatingEpic" @close="epicStore.isCreatingEpic = false" />
  <StoryOverview
    v-if="storyStore.getIsEditingStory && storyStore.getCurrentStory !== undefined"
    :story="storyStore.getCurrentStory"
    @close="closeEditingDialog"
  />
  <NuxtPage class="px-10 py-32" />
</template>
