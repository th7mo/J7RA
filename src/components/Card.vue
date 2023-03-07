<script setup lang="ts">
defineProps({
    title: String,
    subText: String
})
</script>

<template>
  <div class="card">
    <h4 class="title">{{ title }}</h4>
    <p class="seconday-text">{{ subText }}</p>
  </div>
</template>

<style scoped>
    h4 {
        @apply font-bold
    }

    .card {
        @apply bg-white rounded-sm shadow-md w-80 p-3
    }
</style>
