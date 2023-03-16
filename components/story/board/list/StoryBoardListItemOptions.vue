<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    story: UserStory;
  }>();

  const isOptionsListShown = ref(false);

  function toggleOptionsList() {
    isOptionsListShown.value = !isOptionsListShown.value;
  }
</script>

<template>
  <BaseEllipsisButton
    @click="toggleOptionsList"
    @blur="isOptionsListShown = false"
    tabindex="1"
    v-bind="$attrs"
  />

  <StoryBoardListItemOptionsList
    v-if="isOptionsListShown"
    :story="story"
    class="top-11 right-2 absolute z-50"
  />
</template>
