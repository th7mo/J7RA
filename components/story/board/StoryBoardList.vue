<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  const store = await useStoryStore();
  const stories = computed(() => {
    return store.getStories;
  });

  onMounted(() => {
    store.fetchStories();
  });
</script>

<template>
  <ul class="list">
    <li v-for="story in stories" :key="story.key">
      <StoryBoardListItem :id="story.key" :summary="story.summary" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
  ul.list {
    @apply flex flex-col gap-1 p-2;
  }

  li {
    &:hover {
      @apply scale-[1.01] duration-100;
    }
  }
</style>
