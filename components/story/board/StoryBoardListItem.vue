<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
    kanbanStyle?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    kanbanStyle: false,
  });
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

  const storyStore = useStoryStore();

  function showStoryOverview() {
    storyStore.setCurrentStory(props.story);
    storyStore.setIsEditingStory(true);
  }
</script>

<template>
  <ul :class="kanbanStyle ? 'kanban-style list-item' : 'list-item'">
    <li :class="story.progress === 'Done' ? 'done key' : 'key'" @click="showStoryOverview">
      {{ displayKey }}
    </li>
    <li class="summary">{{ story.summary }}</li>
    <li v-if="!kanbanStyle" class="progress">
      <StoryProgressLabelDropdown :story="story" />
    </li>
    <li class="ellipsis">
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
  ul.list-item {
    @apply text-sm grid items-center border-y-gray-300 shadow rounded bg-white py-2 px-3 gap-3;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr auto;
  }

  ul.kanban-style {
    @apply px-2 py-1;

    & > li {
      @apply items-start;

      &.key {
        @apply col-start-1 col-end-5 row-start-2 row-end-3 justify-start p-0 pl-1 py-2 font-bold text-[0.77rem];
      }

      &.summary {
        @apply col-span-7 justify-self-start pt-1 pl-1;
      }

      &.ellipsis {
        @apply pt-1;
      }
    }
  }

  li {
    @apply h-full flex items-center justify-center;

    &.summary {
      @apply col-span-5 justify-self-start;
    }

    &.done {
      @apply line-through;
    }

    &.progress {
      @apply justify-self-end;
    }

    &.ellipsis {
        @apply pl-3;
      }

    &.key {
      @apply text-gray-600 justify-self-start;

      &:hover {
        @apply cursor-pointer underline;
      }
    }
  }

  .options {
    @apply top-11 right-2 absolute z-10;
  }
</style>
