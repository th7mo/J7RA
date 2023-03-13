<template>
  <main class="page">
    <article>
      <h2>Kanban</h2>
      <StoryBoardKanban class="kanban" />
    </article>
  </main>
</template>

<style scoped lang="scss">
  .page {
    @apply flex items-center flex-col w-full;
  }

  article {
    @apply w-full max-w-4xl;
  }

  h2 {
    @apply font-bold text-5xl mt-16 mb-5 w-full;
  }

  .kanban {
    @apply w-full;
  }
</style>
