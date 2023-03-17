<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    story: UserStory;
  }>();

  const isListShown = ref(false);
  const epicStore = useEpicStore();

  function toggleList() {
    isListShown.value = !isListShown.value;
  }
</script>

<template>
  <BaseLabel
    class="hover:cursor-pointer relative"
    purple
    tabindex="1"
    dropdown
    @click="toggleList"
    @blur="isListShown = false"
  >
    <span>{{ story.epic ? epicStore.getEpic(story.epic)?.name : 'Add Epic' }}</span>
    <BaseDropdownIcon color="#9333EA" :class="`${isListShown ? 'rotate-180' : ''}`" />
    <EpicDropdownList v-if="isListShown" @close="isListShown = false" :story="story" />
  </BaseLabel>
</template>
