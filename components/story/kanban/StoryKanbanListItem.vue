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
</script>

<template>
  <BaseDraggable :id="story.key" :story="story">
    <li
      class="px-2 py-1 text-sm grid items-center border border-gray-300 shadow rounded bg-white gap-3 select-none relative"
    >
      <h2 class="justify-self-start pt-1 pl-1">{{ story.summary }}</h2>

      <StoryListItemOptions :story="story" class="self-start mt-1" />
      <BaseLabel v-if="story.epic" class="ml-[2px] py-0 px-[4px] col-span-2" purple
        ><span>{{ epicStore.getEpic(story.epic)?.name }}</span></BaseLabel
      >
      <StoryKeyButton :story="story" class="mb-1 py-1 pr-2 pl-1" />
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
