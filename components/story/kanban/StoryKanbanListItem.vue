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
      class="px-2 py-1 text-sm grid items-center border border-gray-300 shadow rounded bg-white gap-3 select-none relative"
    >
      <h2 class="justify-self-start pt-1 pl-1">{{ story.summary }}</h2>

      <StoryListItemOptions :story="story" class="self-start mt-1" />
      <EpicDropdown v-if="story.epic" class="ml-[2px] py-0 px-[4px] col-span-2" :story="story" />
      <p
        class="text-gray-700 hover:cursor-pointer max-w-fit py-1 pr-2 pl-1 mb-1 rounded hover:bg-gray-100 justify-start font-bold text-[0.77rem]"
        :class="story.progress === 'Done' ? 'line-through' : ''"
        @click="showStoryOverview"
      >
        {{ displayKey }}
      </p>
      <BaseCheckIcon
        v-if="story.progress === 'Done'"
        class="pt-[2px] grid self-center justify-self-center"
      />
    </li>
  </BaseDraggable>
</template>

<style scoped lang="scss">
  li {
    grid-template-columns: 1fr auto;
  }
</style>
