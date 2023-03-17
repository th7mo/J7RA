<script setup lang="ts">
  const epicStore = useEpicStore();
</script>

<template>
  <section class="bg-gray-100/70 border border-gray-200 rounded py-3 px-2 group">
    <ul class="flex gap-1 flex-col">
      <EpicListItem v-for="epic in epicStore.epics" :epic="epic" />
      <EpicListItemCreateRow text="Create Epic" class="opacity-0 group-hover:opacity-100" />
    </ul>
  </section>
</template>
