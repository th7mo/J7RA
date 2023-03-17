<script setup lang="ts">
  const emit = defineEmits(['close']);
</script>

<template>
  <div :class="`fixed inset-0 bg-slate-800/40 grid place-items-center z-50`" @click="emit('close')">
    <article @click.stop="" class="bg-white p-10 w-full max-w-4xl rounded-sm">
      <header class="flex mb-4 items-start">
        <slot name="header"></slot><BaseCloseButton class="ml-auto" @click="emit('close')" />
      </header>
      <slot name="main"></slot>
    </article>
  </div>
</template>
