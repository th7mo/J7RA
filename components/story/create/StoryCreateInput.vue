<script setup lang="ts">
  interface Props {
    labelText: string;
    modelValue?: string;
    required?: boolean;
    error?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    required: false,
    error: false,
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();
</script>

<template>
  <section>
    <BaseLabel :required="required" :label-text="labelText" />
    <input
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      type="text"
      :class="error ? 'error' : ''"
    />
  </section>
</template>

<style scoped lang="scss">
  input {
    @apply block outline-none border-gray-200 border-2 rounded-sm p-1 w-full;

    &:focus {
      @apply border-blue-500;
    }

    &.error {
      @apply border-red-500 border-2;
    }
  }
</style>
