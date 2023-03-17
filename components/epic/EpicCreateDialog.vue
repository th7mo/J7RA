<script setup lang="ts">
  import { Epic } from '~~/composables/epic';
  const epicStore = useEpicStore();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  const epic = reactive<Epic>({
    id: 1,
    name: '',
    description: '',
  });

  const isInvalidName = computed(() => {
    return isCreateEpicButtonClicked.value && epic.name.trim() === '';
  });

  const isCreateEpicButtonClicked = ref(false);

  function createUserStory() {
    isCreateEpicButtonClicked.value = true;

    if (isInvalidName.value) {
      return;
    }
    emit('close');
    epicStore.postEpic(epic);
  }
</script>

<template>
  <BaseDialog @click="emit('close')">
    <header class="flex content-between">
      <h2 class="font-bold w-[40vw] text-2xl mb-8">Create Epic</h2>
      <BaseCloseButton class="float-right" @click="emit('close')" />
    </header>
    <form class="flex flex-col gap-5">
      <BaseInput required label-text="Name" v-model="epic.name" :error="isInvalidName" />
      <BaseTextArea
        label-text="Description"
        place-holder="You can enter more details here!"
        v-model="epic.description"
        class="description"
      />
      <section class="flex justify-end">
        <BaseButton @click="emit('close')" transparent class="mt-4 mr-2" label="Cancel" />
        <BaseButton @click="createUserStory" class="mt-4" label="Create" />
      </section>
    </form>
  </BaseDialog>
</template>
