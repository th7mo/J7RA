<script setup lang="ts">
  import { Epic } from '~~/composables/epic';

  const props = defineProps<{
    epic: Epic;
    modelValue: number[];
  }>();

  const emit = defineEmits(['update:modelValue']);

  const model = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });
</script>

<template>
  <input type="checkbox" :id="epic.id.toString()" v-model="model" :value="epic.id" />
</template>
