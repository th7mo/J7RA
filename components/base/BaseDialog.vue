<script setup lang="ts">
  interface Props {
    cappedWidth?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    cappedWidth: false,
  });

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();
</script>

<template>
  <div @click="emit('close')">
    <section @click.stop="" :class="cappedWidth ? 'medium' : ''">
      <slot></slot>
    </section>
  </div>
</template>

<style scoped lang="scss">
  div {
    @apply fixed top-0 bottom-0 left-0 right-0 bg-opacity-40 bg-slate-800 flex justify-center items-center;
  }

  .medium {
    @apply max-w-4xl;
  }

  section {
    @apply bg-white p-10 rounded-sm;
  }
</style>
