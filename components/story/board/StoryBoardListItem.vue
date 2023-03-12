<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
  }

  const props = defineProps<Props>();
  const isOptionsListShown = ref(false);

  const displayKey = computed(() => {
    return `STORY-${props.story.key}`;
  });

  function closeOptionsList() {
    isOptionsListShown.value = false;
  }

  function showOptionsList() {
    isOptionsListShown.value = true;
  }
</script>

<template>
  <ul class="list-item">
    <li class="key">{{ displayKey }}</li>
    <li>{{ story.summary }}</li>
    <li class="first-right-item"><StoryProgressLabel :story="story" /></li>
    <li>
      <BaseEllipsisButton @clicked="showOptionsList" @blur="closeOptionsList" tabindex="1" />
    </li>
  </ul>
  <StoryBoardListItemOptionsList
    v-if="isOptionsListShown"
    :story="story"
    @show-story-overview=""
    class="options"
  />
</template>

<style scoped lang="scss">
  .container {
    @apply relative;
  }

  ul.list-item {
    @apply text-sm flex items-center border-gray-300  gap-4 shadow rounded bg-white;
  }

  li {
    @apply h-full flex items-center justify-center p-2;
  }

  li.key {
    @apply text-gray-600 ml-1;
  }

  .first-right-item {
    @apply ml-auto;
  }

  .options {
    @apply top-11 right-2 absolute z-10;
  }
</style>
