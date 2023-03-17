<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const props = defineProps<{
    story: UserStory;
  }>();
  const isDropdownShown = ref(false);

  function getComputedColorHex() {
    console.log(props.story.progress);

    if (props.story.progress === 'To Do') {
      return '#6b7280';
    } else if (props.story.progress === 'Done') {
      return '#16a34a';
    }
    return '#2563eb';
  }

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
    :gray="props.story.progress === 'To Do'"
    :blue="props.story.progress === 'In Progress'"
    :green="props.story.progress === 'Done'"
    class="hover:cursor-pointer relative"
    dropdown
  >
    {{ story.progress }}
    <BaseDropdownIcon :color="getComputedColorHex()" :class="isDropdownShown ? 'rotate-180' : ''" />
    <StoryProgressLabelDropdownList
      class="top-8 right-0 absolute z-50"
      :story="story"
      v-if="isDropdownShown"
      @option-clicked="closeDropdown"
    />
  </BaseLabel>
</template>
