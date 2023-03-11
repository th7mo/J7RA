<script setup lang="ts">
  const existingTitle = 'An existing title';
</script>

<template>
  <Story :layout="{ type: 'grid', width: '90%' }">
    <Variant title="Summary">
      <StoryCreateInput labelText="Summary" />
    </Variant>

    <Variant title="Summary Required">
      <StoryCreateInput labelText="Summary" required />
    </Variant>

    <Variant title="Summary Required Error">
      <StoryCreateInput labelText="Summary" required error />
    </Variant>

    <Variant title="Summary Editable">
      <StoryCreateInput borderless v-model="existingTitle" class="text-2xl" />
    </Variant>
  </Story>
</template>
