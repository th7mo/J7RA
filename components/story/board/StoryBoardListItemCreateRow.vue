<script setup lang="ts">
  interface Props {
    hidden?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    hidden: false,
  });
  const storyStore = useStoryStore();
</script>

<template>
  <ul @click="storyStore.setIsCreatingStory(true)" :class="hidden ? 'hidden' : ''">
    <li>
      <figure>
        <img src="~~/assets/icons/plus-solid.svg" />
      </figure>
    </li>
    <li>Create Story</li>
  </ul>
</template>

<style scoped lang="scss">
  .hidden {
    @apply opacity-0;

    &:hover {
      @apply opacity-100;
    }
  }

  ul {
    @apply w-full flex items-center p-1 rounded py-2;

    &:hover {
      @apply bg-gray-200 bg-opacity-70;
    }
  }

  li {
    @apply text-sm;
  }

  figure {
    @apply w-3 h-3 flex items-center justify-center rounded-sm mx-2;

    img {
      @apply w-3 h-3;
    }
  }
</style>
