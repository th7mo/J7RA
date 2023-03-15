<script setup lang="ts">
  const emit = defineEmits(['close']);
</script>

<template>
  <figure
    class="w-9 h-9 grid place-items-center rounded-sm duration-100 hover:bg-gray-100 hover:cursor-pointer"
    @click="emit('close')"
  >
    <img class="h-7 w-7" src="~~/assets/icons/xmark-solid.svg" />
  </figure>
</template>
