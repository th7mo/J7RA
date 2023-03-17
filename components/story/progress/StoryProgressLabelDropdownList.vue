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
      <BaseLabel gray>To Do</BaseLabel>
    </BaseOptionsListItem>
    <BaseOptionsListItem @mousedown.left="saveProgressState('In Progress')">
      <BaseLabel>In Progress</BaseLabel>
    </BaseOptionsListItem>
    <BaseOptionsListItem @mousedown.left="saveProgressState('Done')">
      <BaseLabel green>Done</BaseLabel>
    </BaseOptionsListItem>
  </BaseOptionsList>
</template>
