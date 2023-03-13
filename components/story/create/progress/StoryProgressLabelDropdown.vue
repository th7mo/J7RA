<script setup lang="ts">
  import { propsToAttrMap } from '@vue/shared';
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
  }

  const props = defineProps<Props>();
  const isDropdownShown = ref(false);

  const computedColor = computed(() => {
    if (props.story.progress === 'To Do') {
      return 'gray';
    } else if (props.story.progress === 'Done') {
      return 'green';
    }
    return '';
  });

  const computedColorHex = computed(() => {
    if (props.story.progress === 'To Do') {
      return '#6B7280';
    } else if (props.story.progress === 'Done') {
      return '#16A34A';
    }
    return '#2563EB';
  });

  function closeDropdown() {
    isDropdownShown.value = false;
  }
</script>

<template>
  <ul @click="isDropdownShown = true" @blur="closeDropdown" tabindex="1" :class="computedColor">
    <p>{{ story.progress }}</p>
    <BaseDropdown :color="computedColorHex" />
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
    @apply flex items-center font-bold bg-blue-100 text-blue-600 px-2 py-[0.05rem] rounded text-[0.8rem] relative;

    &:hover {
      @apply cursor-pointer;
    }
  }

  p {
    @apply whitespace-nowrap;
  }

  .dropdown-list {
    @apply top-8 right-0 absolute z-10;
  }

  .gray {
    @apply text-gray-500 bg-gray-200 bg-opacity-70;
  }

  .green {
    @apply text-green-600 bg-green-100;
  }
</style>
