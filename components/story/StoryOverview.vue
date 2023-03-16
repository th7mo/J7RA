<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    story: UserStory;
  }>();

  const emit = defineEmits(['close']);
</script>

<template>
  <BaseDialog @click="emit('close')" capped-width>
    <header class="flex items-center gap-7 ml-3 text-sm">
      <p>STORY-{{ story.key }}</p>
      <StoryProgressLabelDropdown :story="story" />
      <BaseCloseButton class="ml-auto" @click="emit('close')" />
    </header>

    <StoryCreateInput
      class="font-medium text-2xl my-7 min-w-full min-h-fit w-[50rem]"
      v-model="story.summary"
      borderless
      :rows="1"
    />
    <p class="font-semibold text-sm ml-[0.62rem] mb-1">Description</p>

    <StoryCreateTextArea
      class="max-w-2xl text-sm marker:ml-1 text-gray-700"
      v-model="story.description"
      borderless
      :rows="7"
      place-holder="You can add a description here!"
    />
  </BaseDialog>
</template>
