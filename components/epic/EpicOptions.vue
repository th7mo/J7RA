<script setup lang="ts">
  import { Epic } from '~~/composables/epic';

  defineProps<{
    epic: Epic;
  }>();

  const isOptionsListShown = ref(false);

  function toggleOptionsList() {
    isOptionsListShown.value = !isOptionsListShown.value;
  }
</script>

<template>
  <BaseEllipsisButton
    @click="toggleOptionsList"
    @blur="isOptionsListShown = false"
    tabindex="1"
    class="relative"
  >
    <EpicOptionsList v-if="isOptionsListShown" :epic="epic" class="absolute top-8 right-0 z-50" />
  </BaseEllipsisButton>
</template>
