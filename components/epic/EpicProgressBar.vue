<script setup lang="ts">
  import { Epic } from '~~/composables/epic';

  const props = defineProps<{
    epic: Epic;
    todo: number;
    inProgress: number;
    done: number;
  }>();

  const total = computed(() => props.todo + props.inProgress + props.done);

  const inProgressLength = computed(() => {
    if (total.value === 0) {
      return 0;
    }

    return ((props.inProgress + props.done) / total.value) * 100;
  });

  const doneLength = computed(() => {
    if (props.inProgress === 0) {
      return 100;
    }

    return (props.done / (props.done + props.inProgress)) * 100;
  });
</script>

<template>
  <div class="rounded-full bg-gray-300 h-[.3rem]">
    <div class="rounded-full bg-blue-600 h-full" :style="{ width: inProgressLength + '%' }">
      <div class="rounded-full bg-green-600/100 h-full" :style="{ width: doneLength + '%' }"></div>
    </div>
  </div>
</template>
