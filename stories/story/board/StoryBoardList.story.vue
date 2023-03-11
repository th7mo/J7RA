<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const stories: UserStory[] = [
    {
      key: 5,
      summary: 'Create new page for filling surveys',
      description: '',
    },
    {
      key: 6,
      summary: 'Remove dead code from application',
      description: '',
    },
    {
      key: 15,
      summary: '',
      description: '',
    },
  ];
  const oneStory: UserStory[] = [
    {
      key: 514,
      summary: 'Create new page for filling surveys',
      description: 'With a description that will not be showeed',
    },
  ];

  const storiesWithoutSummary: UserStory[] = [
    {
      key: 888,
      summary: 'The one below has an empty summary',
      description: 'With a description that will not be showeed',
    },
    {
      key: 915,
      summary: '',
      description: 'With a description that will not be showeed',
    },
  ];
</script>

<template>
  <Story :layout="{ type: 'grid', width: '80%' }">
    <Variant title="Filled List">
      <Suspense>
        <StoryBoardList :stories="stories" title="BACKLOG" />
      </Suspense>
    </Variant>

    <Variant title="Empty List">
      <Suspense>
        <StoryBoardList :stories="[]" title="TODO" />
      </Suspense>
    </Variant>

    <Variant title="Empty List Without Title">
      <Suspense>
        <StoryBoardList :stories="[]" />
      </Suspense>
    </Variant>

    <Variant title="Single Item List Without Title">
      <Suspense>
        <StoryBoardList :stories="oneStory" />
      </Suspense>
    </Variant>

    <Variant title="List with item without summary">
      <Suspense>
        <StoryBoardList :stories="storiesWithoutSummary" title="IN PROGESS | 1 ISSUE" />
      </Suspense>
    </Variant>
  </Story>
</template>
