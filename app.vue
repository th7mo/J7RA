<script setup lang="ts">
  const storyStore = useStoryStore();

  onBeforeMount(() => {
    storyStore.fetchStories();
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
  <StoryOverview
    v-if="storyStore.getIsEditingStory && storyStore.getCurrentStory !== undefined"
    :story="storyStore.getCurrentStory"
    @close="closeEditingDialog"
  />
  <NuxtPage class="px-10"/>
</template>
