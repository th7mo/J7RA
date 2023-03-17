<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    story: UserStory;
  }>();

  const isListShown = ref(false);
  const epicStore = useEpicStore();
</script>

<template>
  <BaseLabel
    class="hover:cursor-pointer relative"
    purple
    tabindex="1"
    dropdown
    @click="isListShown = true"
    @blur="isListShown = false"
  >
    <span>{{ story.epic ? epicStore.getEpic(story.epic)?.name : 'Add Epic' }}</span>
    <BaseDropdownIcon color="#9333EA" />
    <EpicDropdownList v-if="isListShown" @close="isListShown = false" :story="story" />
  </BaseLabel>
</template>
