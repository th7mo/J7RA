<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
  }

  const isDropdownShown = ref(false);

  function closeDropdown() {
    isDropdownShown.value = false;
  }

  defineProps<Props>();
</script>

<template>
  <ul @click="isDropdownShown = true" @blur="closeDropdown" tabindex="1">
    <p>{{ story.progress }}</p>
    <BaseDropdown color="#2563EB" />
    <StoryProgressLabelDropdownList
      :story="story"
      v-if="isDropdownShown"
      class="dropdown-list"
      @option-clicked="closeDropdown"
    />
  </ul>
</template>

<style scoped lang="scss">
  ul {
    @apply flex items-center font-bold bg-blue-200 text-blue-600 px-2 py-[0.05rem] rounded text-[0.8rem] relative;

    &:hover {
      @apply cursor-pointer;
    }
  }

  .dropdown-list {
    @apply top-8 right-0 absolute z-10;
  }
</style>
