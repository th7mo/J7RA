<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();
</script>

<template>
  <BaseDialog @close="emit('close')" capped-width>
    <header>
      <p class="story-key">STORY-{{ story.key }}</p>
      <StoryProgressLabelDropdown :story="story" />
      <BaseCloseButton @close="emit('close')" class="close-button" />
    </header>
    <StoryCreateInput v-model="story.summary" borderless class="summary" :rows="1" />

    <ul>
      <p class="static-description">Description</p>
    </ul>

    <StoryCreateTextArea
      v-model="story.description"
      borderless
      class="description"
      :rows="7"
      place-holder="You can add a description here!"
    />
  </BaseDialog>
</template>

<style scoped lang="scss">
  header {
    @apply flex items-center gap-7 ml-3 text-sm;
  }

  .summary {
    @apply font-medium text-2xl my-7 min-w-full min-h-fit w-[50rem];
  }

  p.static-description {
    @apply font-semibold text-sm ml-[0.62rem] mb-1;
  }

  .description {
    @apply max-w-2xl text-sm marker:ml-1 text-gray-700;
  }

  .close-button {
    @apply ml-auto;
  }
</style>
