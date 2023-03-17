<script setup lang="ts">
  const storyStore = useStoryStore();
</script>

<template>
  <nav class="top-0 border-b border-gray-200 select-none">
    <ul class="flex h-14 gap-6 items-center">
      <li class="flex items-center h-full gap-4 pl-8 pr-4">
        <figure class="w-8 h-8">
          <img src="~~/assets/img/logo.png" alt="Logo" />
        </figure>
        <p class="text-lg font-bold">J7RA</p>
      </li>
      <TheHeaderPageLink to="backlog" />
      <TheHeaderPageLink to="kanban" />
      <TheHeaderPageLink to="epics" />
      <li class="h-full grid place-items-center pl-3">
        <BaseButton label="Create" @click="storyStore.setIsCreatingStory(true)" />
      </li>
    </ul>
  </nav>
</template>
