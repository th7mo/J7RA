<script setup lang="ts">
  interface Props {
    label: string;
    transparent?: boolean;
    disabled?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    transparent: false,
    disabled: false,
  });
</script>

<template>
  <button :class="transparent ? 'transparent' : ''" :disabled="disabled">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
  button {
    @apply px-2 py-1 rounded-md bg-blue-600 text-white;

    &:hover {
      @apply bg-blue-500;
    }

    &:disabled {
      @apply bg-gray-300 cursor-not-allowed;

      &:hover {
        @apply no-underline;
      }
    }

    &.transparent {
      @apply bg-transparent text-gray-700;

      &:hover {
        @apply underline;
      }

      &:disabled {
        @apply text-gray-300;
      }
    }
  }
</style>
