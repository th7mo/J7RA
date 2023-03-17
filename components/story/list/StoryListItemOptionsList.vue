<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const props = defineProps<{
    story: UserStory;
  }>();

  const storyStore = useStoryStore();

  function showStoryOverview() {
    storyStore.setCurrentStory(props.story);
    storyStore.setIsEditingStory(true);
  }

  function deleteCurrentStory() {
    storyStore.deleteStory(props.story.key);
  }
</script>

<template>
  <BaseOptionsList class="w-20">
    <BaseOptionsListItem @mousedown.left="showStoryOverview">Edit</BaseOptionsListItem>
    <BaseOptionsListItem @mousedown.left="deleteCurrentStory" class="hover:border-l-red-500"
      >Delete</BaseOptionsListItem
    >
  </BaseOptionsList>
</template>
