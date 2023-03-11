<script setup lang="ts">
  interface Props {
    labelText?: string;
    modelValue?: string;
    required?: boolean;
    placeHolder?: string;
    rows?: number;
    borderless?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    rows: 4,
    required: false,
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();
</script>

<template>
  <section>
    <BaseLabel v-if="labelText" :required="required" :label-text="labelText" />
    <textarea
      @keyup="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      v-text="modelValue"
      :rows="rows"
      :placeholder="placeHolder"
      :class="borderless ? 'borderless' : ''"
    ></textarea>
  </section>
</template>

<style scoped lang="scss">
  textarea {
    @apply box-border outline-none border-gray-200 border-2 rounded-sm p-1 w-full resize-none;

    &.borderless {
      @apply border-transparent pl-2;

      &:hover {
        @apply bg-gray-100;
      }

      &:focus {
        @apply border-blue-500 border-solid bg-transparent;
      }
    }
  }
</style>
