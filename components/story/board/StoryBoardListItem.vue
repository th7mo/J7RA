<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
    kanbanStyle?: boolean;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    kanbanStyle: false,
    disabled: false,
  });

  const isOptionsListShown = ref(false);
  const draggable = ref(false);

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
  const element = ref();

  onMounted(() => {
    element.value = document.getElementById(`list-card${props.story.key}`);
  });

  function showStoryOverview() {
    storyStore.setCurrentStory(props.story);
    storyStore.setIsEditingStory(true);
  }

  const initX = ref(0);
  const initY = ref(0);

  function setDraggable(event: any) {
    draggable.value = true;
    initX.value = event.screenX;
    initY.value = event.screenY;
  }

  function moveElement(event: any) {
    if (draggable.value === false) {
      return;
    }
    const diffX = event.screenX - initX.value;
    const diffY = event.screenY - initY.value;
    element.value.style.transform = `translate(${diffX}px, ${diffY}px)`;
  }

  function stopMovingElement() {
    element.value.style.transform = 'translate(0, 0)';
    draggable.value = false;
  }
</script>

<template>
  <ul
    :id="'list-card' + story.key"
    :class="`list-item ${props.kanbanStyle ? 'kanban-style' : ''} ${draggable ? 'top' : ''}`"
    @mousedown="setDraggable"
    @mousemove="moveElement"
    @mouseup="stopMovingElement"
  >
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
    @apply text-sm grid items-center border-y-gray-300 shadow rounded bg-white py-2 px-3 gap-3 select-none z-10 relative;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr auto;

    &:hover {
      @apply cursor-pointer;
    }

    & > li {
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

  .options {
    @apply top-11 right-2 absolute z-10;
  }

  ul.top {
    @apply z-50;
  }
</style>
