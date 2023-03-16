<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    stories: UserStory[];
    title?: string;
    kanban?: boolean;
  }>();
</script>

<template>
  <section class="bg-gray-100/70 border border-gray-200 rounded py-3 px-2 group">
    <h2
      v-if="title"
      class="text-base text-slate-700 font-light ml-1 mb-2 flex items-center gap-4 select-none"
    >
      {{ title }} {{ stories.length > 0 ? ` (${stories.length})` : '' }}
      <BaseCheckIcon v-if="title === 'Done'" class="pt-[2px]" />
    </h2>
    <ul class="flex flex-col gap-1">
      <StoryBoardKanbanListItem
        v-for="story in stories"
        v-if="kanban"
        :key="story.key"
        :story="story"
        :id="story.key"
      />
      <StoryBoardBacklogListItem
        v-else
        v-for="story in stories"
        :id="story.key"
        :story="story"
        :key="story.key + '-backlog'"
      />
      <StoryBoardListItemCreateRow class="opacity-0 group-hover:opacity-100" />
    </ul>
  </section>
</template>
