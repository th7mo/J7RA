<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const props = defineProps<{
    story: UserStory;
  }>();

  const displayKey = computed(() => {
    return `STORY-${props.story.key}`;
  });

  const storyStore = useStoryStore();
  const epicStore = useEpicStore();

  function showStoryOverview() {
    storyStore.setCurrentStory(props.story);
    storyStore.setIsEditingStory(true);
  }
</script>

<template>
  <BaseDraggable :id="story.key" :story="story">
    <li
      class="text-sm grid items-center border border-gray-300 shadow rounded bg-white gap-3 select-none relative px-2 py-1"
    >
      <p
        :class="`text-gray-700 hover:cursor-pointer max-w-fit col-start-1 py-1 pr-2 pl-1 mb-1 rounded hover:bg-gray-100 col-end-5 row-start-3 row-end-4 justify-start font-bold text-[0.77rem]

      ${story.progress === 'Done' ? 'line-through' : ''}`"
        @click="showStoryOverview"
      >
        {{ displayKey }}
      </p>

      <h2 class="justify-self-start col-span-7 pt-1 pl-1">{{ story.summary }}</h2>

      <StoryListItemOptions :story="story" class="self-start mt-1" />
      <BaseCheckIcon
        v-if="story.progress === 'Done'"
        class="pt-[2px] col-start-8 col-end-9 row-start-3 row-end-4 grid self-center justify-self-center"
      />
      <EpicDropdown
        class="ml-[2px] py-0 px-[4px] col-start-1 col-end-8 row-start-2 row-end-3"
        :story="story"
      />
    </li>
  </BaseDraggable>
</template>

<style scoped lang="scss">
  li {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr auto;
  }
</style>
