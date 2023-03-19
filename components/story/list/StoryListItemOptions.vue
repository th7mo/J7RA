<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    story: UserStory;
  }>();

  const isOptionsListShown = ref(false);

  function toggleOptionsList() {
    isOptionsListShown.value = !isOptionsListShown.value;
  }

  const isTooltipShown = ref(false);

  function setTooltipVisibleWithTimer() {
    isTooltipShown.value = true && !isOptionsListShown.value;
  }
</script>

<template>
  <li class="relative">
    <BaseEllipsisButton
      @click="toggleOptionsList"
      @blur="isOptionsListShown = false"
      tabindex="1"
      v-bind="$attrs"
      @mouseover="setTooltipVisibleWithTimer"
      @mouseleave="isTooltipShown = false"
    />
    <BaseTooltip text="Edit" class="-left-1" v-if="isTooltipShown"></BaseTooltip>

    <StoryListItemOptionsList
      v-if="isOptionsListShown"
      :story="story"
      class="top-8 right-0 absolute z-50 translate-x-10"
    />
  </li>
</template>
