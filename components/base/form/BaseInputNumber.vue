<script setup lang="ts">
  defineProps<{
    labelText?: string;
    modelValue?: string;
    required?: boolean;
    error?: boolean;
    borderless?: boolean;
    placeholder?: string;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();
</script>

<template>
  <section>
    <BaseFormLabel :required="required" :label-text="labelText ? labelText : ''">
      <input
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        type="number"
        :value="modelValue"
        :class="`block outline-none border-gray-200 border-2 px-2 py-1 rounded-sm w-full hover:bg-gray-100 focus:border-blue-500 focus:border-solid focus:bg-transparent pl-1 ${
          error ? 'border-red-500 border-2' : ''
        } ${borderless ? 'border-transparent' : ''}`"
        :placeholder="placeholder"
      />
    </BaseFormLabel>
  </section>
</template>
