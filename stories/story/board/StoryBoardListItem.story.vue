<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const oneStory: UserStory[] = [
    {
      key: 514,
      summary: 'Create new page for filling surveys',
      description: 'With a description that will not be showeed',
    },
  ];

  const minusStory: UserStory[] = [
    {
      key: -1,
      summary: 'Create new page for filling surveys',
      description: 'With a description that will not be showeed',
    },
  ];
</script>

<template>
  <Story :layout="{ type: 'grid', width: '90%' }">
    <Variant title="Normal Story">
      <StoryBoardList :stories="oneStory" />
    </Variant>

    <Variant title="Empty Summary">
      <StoryBoardList :stories="[]" />
    </Variant>

    <Variant title="Key Not Found">
      <StoryBoardList :stories="minusStory" />
    </Variant>
  </Story>
</template>
