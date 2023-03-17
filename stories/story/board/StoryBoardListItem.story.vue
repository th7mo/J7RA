<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const oneStory: UserStory[] = [
    {
      key: 514,
      summary: 'Create new page for filling surveys',
      description: 'With a description that will not be showeed',
      progress: 'To Do'
    },
  ];

  const minusStory: UserStory[] = [
    {
      key: -1,
      summary: 'Create new page for filling surveys',
      description: 'With a description that will not be showed',
      progress: 'To Do'
    },
  ];
</script>

<template>
  <Story :layout="{ type: 'grid', width: '90%' }">
    <Variant title="Normal Story">
      <StoryList :stories="oneStory" />
    </Variant>

    <Variant title="Empty Summary">
      <StoryList :stories="[]" />
    </Variant>

    <Variant title="Key Not Found">
      <StoryList :stories="minusStory" />
    </Variant>
  </Story>
</template>
