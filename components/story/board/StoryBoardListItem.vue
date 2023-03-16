<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const props = defineProps<{
    story: UserStory;
    kanbanStyle?: boolean;
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
    :class="`text-sm grid items-center border-y-gray-300 shadow rounded bg-white gap-3 select-none relative ${
      props.kanbanStyle ? 'px-2 py-1 ' : 'py-2 px-3'
    }`"
  >
    <p
      :class="`text-gray-600 hover:cursor-pointer hover:underline ${
        props.kanbanStyle
          ? 'col-start-1 col-end-5 row-start-2 row-end-3 justify-start p-0 pl-1 py-2 font-bold text-[0.77rem]'
          : ''
      }
      ${story.progress === 'Done' ? 'line-through' : ''}`"
      @click="showStoryOverview"
    >
      {{ displayKey }}
    </p>

    <h2 :class="`justify-self-start ${props.kanbanStyle ? 'col-span-7 pt-1 pl-1' : 'col-span-5'}`">
      {{ story.summary }}
    </h2>

    <StoryProgressLabelDropdown class="justify-self-end" v-if="!kanbanStyle" :story="story" />
    <StoryBoardListItemOptions :story="story" :class="`${kanbanStyle ? 'self-start mt-1' : ''}`" />
  </li>
</template>

<style scoped lang="scss">
  li {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr auto;
  }
</style>
