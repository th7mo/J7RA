<script setup lang="ts">
  const epicStore = useEpicStore();

  function close() {
    epicStore.isEditingEpic = false;
    epicStore.putEpics();
  }
</script>

<template>
  <main class="flex items-center flex-col">
    <article class="max-w-4xl w-full">
      <h1 class="font-bold text-5xl pb-5 w-full select-none">Epics</h1>
      <EpicBoard />
    </article>

    <EpicOverview v-if="epicStore.isEditingEpic" @close="close" :epic="epicStore.currentEpic" />
  </main>
</template>
