<template>
  <main @click.stop="" class="options-container">
    <slot></slot>
  </main>
</template>

<style scoped lang="scss">
  main.options-container {
    @apply bg-white rounded shadow-2xl border border-gray-300;
  }
</style>
