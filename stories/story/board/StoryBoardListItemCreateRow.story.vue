<template>
  <Story :layout="{ type: 'grid', width: '60%' }">
    <Variant title="Visible">
      <StoryBoardListItemCreateRow />
    </Variant>

    <Variant title="Not Visible">
      <StoryBoardListItemCreateRow hidden />
    </Variant>
  </Story>
</template>
