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
  <BaseOptionsList class="py-1 z-50 w-40">
    <BaseOptionsListItem @mousedown.left="saveProgressState('To Do')">
      <StoryProgressLabel text="To Do" gray />
    </BaseOptionsListItem>
    <BaseOptionsListItem @mousedown.left="saveProgressState('In Progress')">
      <StoryProgressLabel text="In Progress" />
    </BaseOptionsListItem>
    <BaseOptionsListItem @mousedown.left="saveProgressState('Done')">
      <StoryProgressLabel text="Done" green />
    </BaseOptionsListItem>
  </BaseOptionsList>
</template>
