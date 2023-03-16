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
  <BaseOptionsList>
    <ul class="py-1">
      <li
        class="px-4 py-2 text-sm border-l-[3px] border-transparent hover:bg-gray-200 hover:cursor-pointer hover:border-l-blue-600"
        @mousedown.left="showStoryOverview"
      >
        Edit
      </li>
      <li
        class="px-4 py-2 text-sm border-l-[3px] border-transparent hover:bg-gray-200 hover:cursor-pointer hover:border-l-red-500"
        @mousedown.left="deleteCurrentStory"
      >
        Delete
      </li>
    </ul>
  </BaseOptionsList>
</template>
