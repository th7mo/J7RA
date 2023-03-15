<script setup lang="ts">
  const storyStore = useStoryStore();
</script>

<template>
  <nav class="top-0 border-b border-gray-200 h-14 select-none">
    <ul class="flex h-full gap-6 items-center">
      <li class="flex h-full items-center">
        <figure class="ml-8 w-8 h-8">
          <img src="~~/assets/img/logo.png" alt="Logo" />
        </figure>
        <p class="mx-4 text-lg font-bold">J7RA</p>
      </li>
      <TheHeaderPageLink to="backlog" />
      <TheHeaderPageLink to="kanban" />
      <BaseButton class="ml-3" label="Create" @click="storyStore.setIsCreatingStory(true)" />
    </ul>
  </nav>
</template>
