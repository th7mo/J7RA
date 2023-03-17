<script setup lang="ts">
  const existingTitle = 'An existing title';
</script>

<template>
  <Story :layout="{ type: 'grid', width: '90%' }">
    <Variant title="Summary">
      <BaseInput labelText="Summary" />
    </Variant>

    <Variant title="Summary Required">
      <BaseInput labelText="Summary" required />
    </Variant>

    <Variant title="Summary Required Error">
      <BaseInput labelText="Summary" required error />
    </Variant>

    <Variant title="Summary Editable">
      <BaseInput borderless v-model="existingTitle" class="text-2xl" />
    </Variant>
  </Story>
</template>
