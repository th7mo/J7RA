<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const props = defineProps<{
    story: UserStory;
  }>();

  const emit = defineEmits(['option-clicked']);
  const store = useStoryStore();

  function saveProgressState(progress: string) {
    props.story.progress = progress;
    store.saveStories();
    emit('option-clicked');
  }
</script>

<template>
  <BaseOptionsList>
    <ul class="w-full py-1 z-50">
      <li
        class="py-1 pl-3 pr-20 border-l-[3px] border-transparent hover:bg-gray-200 hover:border-l-blue-600"
        @mousedown.left="saveProgressState('To Do')"
      >
        <StoryProgressLabel text="To Do" gray />
      </li>
      <li
        class="py-1 pl-3 pr-20 border-l-[3px] border-transparent hover:bg-gray-200 hover:border-l-blue-600"
        @mousedown.left="saveProgressState('In Progress')"
      >
        <StoryProgressLabel text="In Progress" />
      </li>
      <li
        class="py-1 pl-3 pr-20 border-l-[3px] border-transparent hover:bg-gray-200 hover:border-l-blue-600"
        @mousedown.left="saveProgressState('Done')"
      >
        <StoryProgressLabel text="Done" green />
      </li>
    </ul>
  </BaseOptionsList>
</template>
