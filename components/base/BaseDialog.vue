<script setup lang="ts">
  defineProps<{
    cappedWidth?: boolean;
  }>();

  const emit = defineEmits(['close']);
</script>

<template>
  <div :class="`fixed inset-0 bg-slate-800/40 grid place-items-center z-50`" @click="emit('close')">
    <main @click.stop="" :class="`bg-white p-10 rounded-sm ${cappedWidth ? 'max-w-4xl' : ''}`">
      <slot></slot>
    </main>
  </div>
</template>
