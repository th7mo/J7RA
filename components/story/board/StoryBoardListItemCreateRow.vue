<script setup lang="ts">
  defineProps<{
    hidden?: boolean;
  }>();
  const storyStore = useStoryStore();
</script>

<template>
  <li
    :class="`select-none hover:cursor-pointer ${
      hidden
        ? 'opacity-0 hover:opacity-100'
        : 'w-full flex items-center p-1 rounded py-2 hover:bg-gray-200 hover:bg-opacity-70'
    }`"
    @click="storyStore.setIsCreatingStory(true)"
  >
    <BasePlusButton />
    <p class="text-sm">Create Story</p>
  </li>
</template>
