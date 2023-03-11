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
  </Story>
</template>
