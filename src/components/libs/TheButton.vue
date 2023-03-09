<script setup lang="ts">
interface Props {
  filled?: boolean
}

withDefaults(defineProps<Props>(), {
  filled: true
})

</script>

<template>
  <button :class="filled ? 'filled' : ''">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  button {
    @apply px-2 py-1 rounded-md;

    &:hover {
      @apply underline;
    }

    &.filled {
      @apply bg-blue-600 text-white decoration-transparent;

      &:hover {
        @apply bg-blue-500;
      }
    }
  }
</style>
