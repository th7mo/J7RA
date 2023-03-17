<template>
  <Story :layout="{ type: 'grid', width: '60%' }">
    <Variant title="Visible">
      <StoryListItemCreateRow />
    </Variant>

    <Variant title="Not Visible">
      <StoryListItemCreateRow hidden />
    </Variant>
  </Story>
</template>
