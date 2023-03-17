<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    story: UserStory;
  }>();
</script>

<template>
  <section>
    <h2 class="text-xl font-medium mb-3">Details</h2>
    <ul class="border p-3 rounded-sm text-[0.8rem] grid grid-cols-2 items-center gap-1">
      <h4 class="font-bold">Assignee</h4>
      <BaseInput borderless v-model="story.assignee" placeholder="None" />
      <h4 class="font-bold">Story Points</h4>
      <StoryCreateInputNumber borderless v-model="story.points" placeholder="None" />
      <h4 class="font-bold">Created</h4>
      <p class="py-1 pl-[5px]">{{ story.created }}</p>
      <h4 class="font-bold">Epic</h4>
    </ul>
  </section>
</template>
