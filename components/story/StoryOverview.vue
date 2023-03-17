<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  defineProps<{
    story: UserStory;
  }>();

  const emit = defineEmits(['close']);
</script>

<template>
  <BaseDialog @click="emit('close')">
    <ul class="grid grid-cols-5 gap-5 w-full max-w-4xl">
      <header class="flex items-center gap-7 ml-3 text-sm col-span-5">
        <p class="font-bold">STORY-{{ story.key }}</p>
        <StoryProgressLabelDropdown :story="story" />
        <BaseCloseButton class="ml-auto" @click="emit('close')" />
      </header>

      <BaseInput
        class="font-medium text-2xl min-w-full mb-3 pl-1 min-h-fit w-[50rem] col-span-5"
        v-model="story.summary"
        borderless
        :rows="1"
      />

      <li class="col-span-3">
        <p class="font-semibold text-sm ml-[0.62rem] mb-1 pt-4">Description</p>

        <BaseTextArea
          class="text-sm ml-1 text-gray-700"
          v-model="story.description"
          borderless
          :rows="7"
          place-holder="You can add a description here!"
        />
      </li>
      <StoryOverviewDetails :story="story" class="col-span-2" />
    </ul>
  </BaseDialog>
</template>
