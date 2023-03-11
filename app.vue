<script setup lang="ts">
  const isCreatingStory = ref(false);
</script>

<template>
  <TheHeader @create-story="isCreatingStory = true" />
  <StoryCreateDialog v-if="isCreatingStory" @close="isCreatingStory = false" />
  <main class="page">
    <NuxtPage />
  </main>
</template>

<style scoped lang="scss">
  main.page {
    @apply mx-10;
  }
</style>
