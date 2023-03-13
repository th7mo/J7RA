<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const story: UserStory = {
    key: 1651,
    summary: 'The summary',
    description: '',
    progress: 'To Do',
  };
</script>

<template>
  <Story :layout="{ type: 'grid', width: '20%' }">
    <StoryProgressLabelDropdownList :story="story" />
  </Story>
</template>
