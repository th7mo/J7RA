<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
  }

  defineProps<Props>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();
</script>

<template>
  <BaseDialog>
    <header>
      <p class="story-key">STORY-{{ story.key }}</p>
      <BaseCloseButton @close="emit('close')" />
    </header>
    <StoryCreateInput v-model="story.summary" borderless class="summary" :rows="1" />

    <p class="static-description">Description</p>
    <StoryCreateTextArea v-model="story.description" borderless class="description" />
  </BaseDialog>
</template>

<style scoped lang="scss">
  header {
    @apply flex justify-between w-[60vw];
  }

  p.story-key {
    @apply text-sm;
  }

  .summary {
    @apply font-medium text-2xl my-7 min-w-full min-h-fit;
  }

  p.static-description {
    @apply font-semibold mb-2 pl-2;
  }

  .description {
    @apply max-w-2xl text-gray-700;
  }
</style>
