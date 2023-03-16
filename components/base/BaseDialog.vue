<script setup lang="ts">
  defineProps<{
    cappedWidth?: boolean;
  }>();
</script>

<template>
  <div :class="`fixed inset-0 bg-slate-800/40 grid place-items-center z-50`">
    <article @click.stop="" :class="`bg-white p-10 rounded-sm ${cappedWidth ? 'max-w-4xl' : ''}`">
      <slot></slot>
    </article>
  </div>
</template>
