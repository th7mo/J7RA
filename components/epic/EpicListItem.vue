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
</script>

<template>
  <li class="rounded shadow border border-gray-300 bg-white p-2 flex gap-4 items-center">
    <p
      class="font-bold text-[0.77rem] hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2"
      @click="editEpic"
    >
      EPIC-{{ epic.id }}
    </p>
    <h3 class="text-sm">{{ epic.name }}</h3>
  </li>
</template>
