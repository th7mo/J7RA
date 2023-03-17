<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const props = defineProps<{
    story: UserStory;
  }>();

  const displayKey = computed(() => {
    return `STORY-${props.story.key}`;
  });

  const storyStore = useStoryStore();

  function showStoryOverview() {
    storyStore.setCurrentStory(props.story);
    storyStore.setIsEditingStory(true);
  }
</script>

<template>
  <li
    class="text-sm grid items-center border border-gray-300 shadow rounded bg-white gap-3 select-none relative py-2 px-3"
  >
    <p
      :class="`text-gray-600 hover:cursor-pointer hover:underline font-bold text-[0.77rem] max-w-fit pr-2
      ${story.progress === 'Done' ? 'line-through' : ''}`"
      @click="showStoryOverview"
    >
      {{ displayKey }}
    </p>

    <h2 class="justify-self-start col-span-5">{{ story.summary }}</h2>
    <StoryProgressLabelDropdown class="justify-self-end" :story="story" />
    <StoryBoardListItemOptions :story="story" />
  </li>
</template>

<style scoped lang="scss">
  li {
    grid-template-columns: auto 1fr 1fr 1fr 1fr 1fr 1fr auto;
  }
</style>
