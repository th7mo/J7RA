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
  <BaseFormLabel v-if="labelText" :required="required" :label-text="labelText" />
  <textarea
    @keyup="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    v-text="modelValue"
    :rows="rows"
    :placeholder="placeHolder"
    :class="`outline-none border-gray-200 border-2 rounded-sm p-1 w-full resize-none ${
      borderless
        ? 'border-transparent pl-1 hover:bg-gray-100 focus:border-blue-500 focus:border-solid focus:bg-transparent'
        : ''
    }`"
    v-bind="$attrs"
  ></textarea>
</template>
