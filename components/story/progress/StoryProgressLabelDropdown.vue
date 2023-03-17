<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
  }

  const props = defineProps<Props>();
  const isDropdownShown = ref(false);

  const computedColor = computed(() => {
    if (props.story.progress === 'To Do') {
      return 'text-gray-500 bg-gray-200 bg-opacity-70';
    } else if (props.story.progress === 'Done') {
      return 'text-green-600 bg-green-100';
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

  function toggleDropdown() {
    isDropdownShown.value = !isDropdownShown.value;
  }
</script>

<template>
  <button
    @click="toggleDropdown"
    @blur="closeDropdown"
    tabindex="1"
    :class="`flex items-center font-bold bg-blue-100 text-blue-600 px-[6px] py-[2px] rounded text-[0.8rem] relative hover:cursor-pointer ${computedColor}`"
  >
    <span class="whitespace-nowrap">{{ story.progress }}</span>
    <BaseDropdown :color="computedColorHex" />
    <StoryProgressLabelDropdownList
      class="top-8 right-0 absolute z-50"
      :story="story"
      v-if="isDropdownShown"
      @option-clicked="closeDropdown"
    />
  </button>
</template>
