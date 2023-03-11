<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const normalStory: UserStory = {
    key: 5,
    summary: 'Create a seperate page to submit documents.',
    description:
      'Labore laborum irure consequat reprehenderit deserunt sunt sunt sunt qui consectetur occaecat ullamco adipisicing. Esse occaecat Lorem esse commodo occaecat amet adipisicing consectetur minim esse Lorem elit voluptate. Ad excepteur do do magna. Culpa dolor qui elit elit nulla dolore commodo.',
  };
</script>

<template>
  <Story>
    <Variant>
      <StoryOverview :story="normalStory" />
    </Variant>
  </Story>
</template>
