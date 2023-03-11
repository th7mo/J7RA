<script setup lang="ts">
  interface Props {
    labelText?: string;
    modelValue?: string;
    required?: boolean;
    error?: boolean;
    borderless?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    required: false,
    error: false,
    borderless: false,
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();
</script>

<template>
  <section>
    <BaseLabel v-if="labelText" :required="required" :label-text="labelText" />
    <input
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      type="text"
      :value="modelValue"
      :class="error ? 'error' : borderless ? 'borderless' : ''"
    />
  </section>
</template>

<style scoped lang="scss">
  input {
    @apply block outline-none border-gray-200 border-2 rounded-sm p-1 w-full;

    &.borderless {
      @apply border-transparent p-2;

      &:hover {
        @apply bg-gray-100;
      }
    }

    &:focus,
    &.borderless:focus {
      @apply border-blue-500 border-solid bg-transparent;
    }

    &.error {
      @apply border-red-500 border-2;
    }
  }
</style>
