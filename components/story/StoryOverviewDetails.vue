<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    story: UserStory;
  }>();
</script>

<template>
  <section>
    <h2 class="col-span-2 text-xl mb-3">Details</h2>
    <ul class="border p-3 rounded-sm text-[0.8rem] grid grid-cols-2 gap-3">
      <h4 class="font-bold">Assignee</h4>
      <p>{{ story.assignee ? story.assignee : 'None' }}</p>
      <h4 class="font-bold">Story Points</h4>
      <p class="font-light">{{ story.points ? story.points : 'None' }}</p>
    </ul>
  </section>
</template>
