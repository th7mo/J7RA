<script setup lang="ts">
  const emit = defineEmits<{
    (e: 'create-story'): void;
  }>();
</script>

<template>
  <nav>
    <ul>
      <li>
        <figure>
          <img src="~~/assets/img/logo.png" alt="Logo" />
        </figure>
        <p class="company-name">J7RA</p>
      </li>
      <li>
        <NuxtLink to="/backlog"><p>Backlog</p></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/kanban"><p>Kanban Board</p></NuxtLink>
      </li>
      <li><BaseButton label="Create" @click="" /></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    @apply top-0 border-b border-gray-400  h-14;
  }

  ul {
    @apply flex h-full gap-5;
  }

  li {
    @apply flex h-full justify-center items-center;

    & > p {
      @apply px-2 py-1 rounded-md;

      &:hover {
        @apply bg-gray-200;
      }
    }
  }

  figure {
    @apply ml-8 w-8 h-8;
  }

  .company-name {
    @apply mx-4 text-lg font-bold;
  }
</style>
