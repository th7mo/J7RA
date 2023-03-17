<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    story: UserStory;
  }>();

  const epicStore = useEpicStore();
</script>

<template>
  <li
    class="text-sm grid items-center border border-gray-300 shadow rounded bg-white gap-3 select-none relative py-2 px-3"
  >
    <StoryKeyButton :story="story" />

    <h2 class="justify-self-start">{{ story.summary }}</h2>
    <BaseLabel class="ml-[2px] py-0 px-[4px]" :class="story.epic ? '' : 'invisible'" purple
      ><span>{{ epicStore.getEpic(story.epic)?.name }}</span></BaseLabel
    >
    <StoryProgressLabelDropdown class="justify-self-end" :story="story" />
    <StoryListItemOptions :story="story" />
  </li>
</template>

<style scoped lang="scss">
  li {
    grid-template-columns: auto auto 1fr auto auto;
  }
</style>
