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
  <BaseLabel
    @click="toggleDropdown"
    @blur="closeDropdown"
    tabindex="1"
    :class="computedColor + ' hover:cursor-pointer relative'"
  >
    {{ story.progress }}
    <BaseDropdownIcon :color="computedColorHex" />
    <StoryProgressLabelDropdownList
      class="top-8 right-0 absolute z-50"
      :story="story"
      v-if="isDropdownShown"
      @option-clicked="closeDropdown"
    />
  </BaseLabel>
</template>
