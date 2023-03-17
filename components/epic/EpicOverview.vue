<script setup lang="ts">
  import { Epic } from '~~/composables/epic';

  defineProps<{
    epic: Epic;
  }>();

  const emit = defineEmits(['close']);
</script>

<template>
  <BaseDialog @close="emit('close')">
    <template v-slot:header>
      <p class="font-bold ml-2">EPIC-{{ epic.id }}</p>
    </template>
    <template v-slot:main>
      <ul class="grid grid-cols-5 gap-5 w-full max-w-4xl">
        <BaseInput
          class="font-medium text-2xl min-w-full mb-3 pl-1 min-h-fit w-[50rem] col-span-5"
          v-model="epic.name"
          borderless
          :rows="1"
        />

        <li class="col-span-3">
          <p class="font-semibold text-sm ml-[0.62rem] mb-1 pt-4">Description</p>

          <BaseTextArea
            class="text-sm ml-1 text-gray-700"
            v-model="epic.description"
            borderless
            :rows="7"
            place-holder="You can add a description here!"
          />
        </li>
      </ul>
    </template>
  </BaseDialog>
</template>
