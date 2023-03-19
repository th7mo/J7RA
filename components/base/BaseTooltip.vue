<script setup lang="ts">
  defineProps<{
    text: string;
  }>();

  const isAnimating = ref(true);
  setTimeout(() => {
    isAnimating.value = false;
  }, 500);
</script>

<template>
  <span
    :class="{ fade: isAnimating }"
    class="bg-slate-800 rounded px-2 absolute top-10 text-[0.6rem] text-white delay-500"
    >{{ text }}</span
  >
</template>

<style scoped lang="scss">
  .fade {
    animation: fade 0.82s;
  }

  @keyframes fade {
    100% {
      transform: translateX(0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
