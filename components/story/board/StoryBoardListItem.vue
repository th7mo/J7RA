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
</script>

<template>
  <ul :class="kanbanStyle ? 'kanban-style list-item' : 'list-item'">
    <li class="key">{{ displayKey }}</li>
    <li class="summary">{{ story.summary }}</li>
    <li v-if="!kanbanStyle" class="first-right-item">
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
    @apply text-sm flex items-center border-gray-300 gap-4 shadow rounded bg-white;
  }

  ul.kanban-style {
    @apply grid grid-cols-8 gap-0 px-2 py-1;

    & > li.key {
      @apply col-start-1 col-end-5 row-start-2 row-end-3 justify-start p-0 pl-1 py-2 font-bold text-[0.77rem];
    }

    & > li.summary {
      @apply col-span-7 justify-self-start;
    }

    & > li.ellipsis {
      @apply ml-auto items-start pt-1;
    }

    & > li {
      @apply items-start;
    }
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
