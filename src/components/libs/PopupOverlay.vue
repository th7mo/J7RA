<script setup lang="ts">

</script>

<template>
  <Teleport to="body">
    <div>
      <section>
        <slot></slot>
      </section>
    </div>
  </Teleport>

</template>

<style scoped>
  div {
    @apply fixed top-0 bottom-0 left-0 right-0 bg-opacity-20 bg-black flex justify-center items-center
  }

  section {
    @apply bg-white p-10 rounded-sm
  }
</style>
