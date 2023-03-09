<script setup lang="ts">
interface Props {
  filled?: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  filled: true,
  disabled: false,
})

</script>

<template>
  <button :class="filled ? 'filled' : ''" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  button {
    @apply px-2 py-1 rounded-md;

    &:hover {
      @apply underline;
    }

    &:disabled {
        @apply text-gray-300 cursor-not-allowed;

        &:hover {
          @apply no-underline
        }
    }

    &.filled {
      @apply bg-blue-600 text-white decoration-transparent;

      &:hover {
        @apply bg-blue-500;
      }

      &:disabled {
        @apply bg-gray-300 cursor-not-allowed;
      }
    }
  }
</style>
