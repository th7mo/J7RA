<script setup lang="ts">
  const storyStore = useStoryStore();

  defineProps<{
    text: string;
  }>();
</script>

<template>
  <li
    class="select-none hover:cursor-pointer w-full flex items-center p-1 rounded py-2 hover:bg-gray-200 hover:bg-opacity-70 mt-[2px]"
    @click="storyStore.setIsCreatingStory(true)"
  >
    <BasePlusButton />
    <p class="text-sm">{{ text }}</p>
  </li>
</template>
