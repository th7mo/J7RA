<script setup lang="ts">
  const epicStore = useEpicStore();

  const props = defineProps<{
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
  <section class="bg-gray-100/70 border border-gray-200 rounded py-3 px-2 group">
    <ul class="flex gap-1 flex-col">
      <EpicListItem
        v-for="epic in epicStore.epics"
        :epic="epic"
        v-model="model"
      />
      <EpicListItemCreateRow text="Create Epic" class="opacity-0 group-hover:opacity-100" />
    </ul>
  </section>
</template>
