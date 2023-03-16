<script setup lang="ts">
  const storyStore = useStoryStore();
</script>

<template>
  <li
    class="select-none hover:cursor-pointer w-full flex items-center p-1 rounded py-2 hover:bg-gray-200 hover:bg-opacity-70"
    @click="storyStore.setIsCreatingStory(true)"
  >
    <BasePlusButton />
    <p class="text-sm">Create Story</p>
  </li>
</template>
