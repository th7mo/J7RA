<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const stories: UserStory[] = [
    {
      key: 5,
      summary: 'Create new page for filling surveys',
      description: '',
      progress: 'To Do'
    },
    {
      key: 6,
      summary: 'Remove dead code from application',
      description: '',
      progress: 'To Do'
    },
    {
      key: 15,
      summary: '',
      description: '',
      progress: 'To Do'
    },
  ];
  const oneStory: UserStory[] = [
    {
      key: 514,
      summary: 'Create new page for filling surveys',
      description: 'With a description that will not be showeed',
      progress: 'To Do'
    },
  ];

  const storiesWithoutSummary: UserStory[] = [
    {
      key: 888,
      summary: 'The one below has an empty summary',
      description: 'With a description that will not be showeed',
      progress: 'To Do'
    },
    {
      key: 915,
      summary: '',
      description: 'With a description that will not be showeed',
      progress: 'To Do'
    },
  ];
</script>

<template>
  <Story :layout="{ type: 'grid', width: '80%' }">
    <Variant title="Filled List">
      <Suspense>
        <StoryList :stories="stories" title="BACKLOG" />
      </Suspense>
    </Variant>

    <Variant title="Empty List">
      <Suspense>
        <StoryList :stories="[]" title="TODO" />
      </Suspense>
    </Variant>

    <Variant title="Empty List Without Title">
      <Suspense>
        <StoryList :stories="[]" />
      </Suspense>
    </Variant>

    <Variant title="Single Item List Without Title">
      <Suspense>
        <StoryList :stories="oneStory" />
      </Suspense>
    </Variant>

    <Variant title="List with item without summary">
      <Suspense>
        <StoryList :stories="storiesWithoutSummary" title="IN PROGRESS | 1 ISSUE" />
      </Suspense>
    </Variant>
  </Story>
</template>
