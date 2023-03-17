<script setup lang="ts">
  import { Epic } from '~~/composables/epic';

  const props = defineProps<{
    epic: Epic;
    modelValue: number[];
  }>();

  const epicStore = useEpicStore();

  const emit = defineEmits(['update:modelValue']);

  const model = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });

  function editEpic() {
    epicStore.currentEpic = props.epic;
    epicStore.isEditingEpic = true;
  }

  function save() {
    epicStore.putEpics();
  }
</script>

<template>
  <li class="rounded shadow border border-gray-300 bg-white p-[6px] grid gap-1 items-center">
    <BaseCheckbox :epic="epic" v-model="model" class="ml-1" />
    <p
      class="font-bold text-[0.77rem] hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2"
      @click="editEpic"
    >
      EPIC-{{ epic.id }}
    </p>
    <BaseInput v-model="epic.name" class="text-sm py-[2px]" borderless @blur="save" />
    <EpicOptions :epic="epic" />
  </li>
</template>

<style scoped>
  li {
    grid-template-columns: auto auto 1fr auto;
  }
</style>
