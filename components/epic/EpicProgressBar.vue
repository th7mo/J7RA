<script setup lang="ts">
  import { Epic } from '~~/composables/epic';

  const props = defineProps<{
    epic: Epic;
    todo: number;
    inProgress: number;
    done: number;
  }>();

  const totalStories = computed(() => props.todo + props.inProgress + props.done);

  const inProgressWithDoneLength = computed(() => {
    if (totalStories.value === 0) {
      return 0;
    }

    return ((props.inProgress + props.done) / totalStories.value) * 100;
  });

  const doneLengthRelativeToProgress = computed(() => {
    if (props.inProgress === 0) {
      return 100;
    }

    return (props.done / (props.done + props.inProgress)) * 100;
  });
</script>

<template>
  <div class="rounded-full bg-gray-300 h-[.3rem]">
    <div class="rounded-full bg-blue-600 h-full" :style="{ width: inProgressWithDoneLength + '%' }">
      <div
        class="rounded-full bg-green-600 h-full"
        :style="{ width: doneLengthRelativeToProgress + '%' }"
      ></div>
    </div>
  </div>
</template>
