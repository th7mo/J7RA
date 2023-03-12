<script setup lang="ts">
  const storyStore = useStoryStore();

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
  <StoryOverview
    v-if="storyStore.getIsEditingStory && storyStore.getCurrentStory !== undefined"
    :story="storyStore.getCurrentStory"
    @close="closeEditingDialog"
  />
  <main class="page">
    <NuxtPage />
  </main>
</template>

<style scoped lang="scss">
  main.page {
    @apply mx-10;
  }
</style>
