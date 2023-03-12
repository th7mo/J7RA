<script setup lang="ts">
  const isCreatingStory = ref(false);
  const storyStore = useStoryStore();

  function closeEditingDialog() {
    storyStore.setIsEditingStory(false);
    storyStore.setCurrentStory(undefined);
  }
</script>

<template>
  <TheHeader @create-story="isCreatingStory = true" />
  <StoryCreateDialog v-if="isCreatingStory" @close="isCreatingStory = false" />
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
