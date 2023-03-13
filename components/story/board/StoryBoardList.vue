<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    stories: UserStory[];
    title?: string;
  }

  const props = defineProps<Props>();

  const isCreateRowHidden = ref(true);
</script>

<template>
  <ul class="list" @mouseenter="isCreateRowHidden = false" @mouseleave="isCreateRowHidden = true">
    <h2 v-if="title">{{ title }}</h2>
    <li v-for="story in stories" :key="story.key" class="individual-story">
      <StoryBoardListItem :story="story" />
    </li>
    <StoryBoardListItemCreateRow :hidden="isCreateRowHidden" />
  </ul>
</template>

<style scoped lang="scss">
  ul.list {
    @apply flex flex-col gap-1 bg-gray-100 bg-opacity-80 rounded py-3 px-2;
  }

  h2 {
    @apply text-base text-slate-700 font-light ml-1 mb-2;
  }

  .individual-story {
    @apply relative;
  }
</style>
