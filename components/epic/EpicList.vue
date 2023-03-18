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
        :class="model.includes(epic.id) ? 'border-l-blue-600 border-l-4' : 'pl-[0.562rem]'"
      />
      <EpicListItemCreateRow text="Create Epiac" class="opacity-0 group-hover:opacity-100" />
    </ul>
  </section>
</template>
