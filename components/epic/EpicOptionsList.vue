<script setup lang="ts">
  import { Epic } from '~~/composables/epic';

  const epicStore = useEpicStore();
  const storyStore = useStoryStore();

  const props = defineProps<{
    epic: Epic;
  }>();

  function editEpic() {
    epicStore.currentEpic = props.epic;
    epicStore.isEditingEpic = true;
  }

  function deleteEpic() {
    storyStore.deleteEpic(props.epic.id);
    epicStore.deleteEpic(props.epic.id);
  }
</script>

<template>
  <BaseOptionsList class="w-20 text-sm">
    <BaseOptionsListItem @mousedown.left="editEpic">Edit</BaseOptionsListItem>
    <BaseOptionsListItem class="hover:border-l-red-500" @mousedown.left="deleteEpic"
      >Delete</BaseOptionsListItem
    >
  </BaseOptionsList>
</template>
