<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'option-clicked'): void;
  }>();
  const store = useStoryStore();

  function saveProgressState(progress: string) {
    props.story.progress = progress;
    store.saveStories();
    emit('option-clicked');
  }
</script>

<template>
  <BaseOptionsList>
    <ul class="dropdown-list">
      <li @mousedown.left="saveProgressState('To Do')">
        <StoryProgressLabel text="To Do" />
      </li>
      <li @mousedown.left="saveProgressState('In Progress')">
        <StoryProgressLabel text="In Progress" />
      </li>
      <li @mousedown.left="saveProgressState('Done')">
        <StoryProgressLabel text="Done" />
      </li>
    </ul>
  </BaseOptionsList>
</template>

<style scoped lang="scss">
  ul.dropdown-list {
    @apply w-full py-1;

    & > li {
      @apply py-1 pl-3 pr-20 border-l-[3px] border-transparent;

      &:hover {
        @apply bg-gray-200 border-l-blue-600;
      }
    }
  }
</style>
