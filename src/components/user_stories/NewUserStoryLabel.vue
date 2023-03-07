<script setup lang="ts">
interface Props {
  required?: boolean
  labelText: string
}

withDefaults(defineProps<Props>(), {
  required: false
})

</script>

<template>
  <p>{{ labelText }} <span>{{ required ? '*' : '' }}</span></p>
  <slot></slot>
</template>

<style scoped>
  p {
    @apply text-sm text-gray-600 pl-0.5
  }

  span {
    @apply text-red-600 font-bold 
  }
</style>
