<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    stories: UserStory[];
    title?: string;
    kanbanStyle?: boolean;
  }>();

  const isCreateRowHidden = ref(true);
</script>

<template>
  <section
    class="bg-gray-100 bg-opacity-80 rounded py-3 px-2"
    @mouseenter="isCreateRowHidden = false"
    @mouseleave="isCreateRowHidden = true"
  >
    <h2 v-if="title" class="text-base text-slate-700 font-light ml-1 mb-2">{{ title }}</h2>
    <ul class="flex flex-col gap-1">
      <BaseDraggable v-for="story in stories" :id="story.key">
        <StoryBoardListItem :key="story.key" :story="story" :kanban-style="kanbanStyle" :id="story.key" />
      </BaseDraggable>
      <StoryBoardListItemCreateRow :hidden="isCreateRowHidden" />
    </ul>
  </section>
</template>
