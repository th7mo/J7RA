<script setup lang="ts">
  import { Epic } from '~~/composables/epic';

  const props = defineProps<{
    epic: Epic;
  }>();

  const epicStore = useEpicStore();

  function editEpic() {
    epicStore.currentEpic = props.epic;
    epicStore.isEditingEpic = true;
  }

  function save() {
    epicStore.putEpics();
  }
</script>

<template>
  <li class="rounded shadow border border-gray-300 bg-white p-[6px] flex gap-1 items-center">
    <p
      class="font-bold text-[0.77rem] hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2"
      @click="editEpic"
    >
      EPIC-{{ epic.id }}
    </p>
    <BaseInput v-model="epic.name" class="text-sm py-[2px]" borderless @blur="save" />
  </li>
</template>
