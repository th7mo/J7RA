<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    stories: UserStory[];
    title?: string;
  }

  defineProps<Props>();
</script>

<template>
  <ul class="list">
    <h2 v-if="title">{{ title }}</h2>
    <li v-for="story in stories" :key="story.key">
      <StoryBoardListItem :id="story.key" :summary="story.summary" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
  ul.list {
    @apply flex flex-col gap-1 bg-gray-50 rounded py-3 px-1;
  }

  h2 {
    @apply text-base text-slate-700 font-light ml-1 mb-2;
  }

  li {
    &:hover {
      @apply scale-[1.01] duration-100;
    }
  }
</style>
