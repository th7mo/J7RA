<script setup lang="ts">
  import { Epic } from '~~/composables/epic';
  import { UserStory } from '~~/composables/useStoriesService';

  const epicStore = useEpicStore();
  const storyStore = useStoryStore();

  const props = defineProps<{
    story: UserStory;
  }>();

  const emit = defineEmits(['close']);

  function setEpic(epic: Epic) {
    props.story.epic = epic.id;
    storyStore.saveStories();
    emit('close');
  }
</script>

<template>
  <BaseOptionsList class="py-1 z-50 w-52 top-8 right-0 absolute">
    <BaseOptionsListItem v-for="epic in epicStore.epics" @mousedown="setEpic(epic)">
      <BaseLabel class="mr-2" purple>{{ epic.name }}</BaseLabel>
    </BaseOptionsListItem>
  </BaseOptionsList>
</template>
