<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    stories: UserStory[];
    title?: string;
    kanban?: boolean;
    createRow?: boolean;
  }>();
</script>

<template>
  <BaseList class="group">
    <h2
      v-if="title"
      class="text-base text-slate-700 font-light ml-1 mb-2 flex items-center gap-4 select-none"
    >
      {{ title }} {{ stories.length > 0 ? ` (${stories.length})` : '' }}
      <BaseCheckIcon v-if="title === 'Done'" class="pt-[2px]" />
    </h2>
    <ul class="flex flex-col gap-1">
      <StoryKanbanListItem
        v-for="story in stories"
        v-if="kanban"
        :key="story.key"
        :story="story"
        :id="story.key"
      />
      <StoryBacklogListItem
        v-else
        v-for="story in stories"
        :id="story.key"
        :story="story"
        :key="story.key + '-backlog'"
      />
      <StoryListItemCreateRow
        class="opacity-0 group-hover:opacity-100"
        text="Create Story"
        v-if="createRow"
      />
    </ul>
  </BaseList>
</template>
