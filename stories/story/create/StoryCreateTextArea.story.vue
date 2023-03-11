<template>
  <Story :layout="{ type: 'grid', width: '90%' }">
    <Variant title="Description">
      <StoryCreateTextArea label-text="Description" place-holder="Enter your description here!" />
    </Variant>

    <Variant title="Less Rows">
      <StoryCreateTextArea
        label-text="Description"
        :rows="2"
        place-holder="Enter your description here!"
      />
    </Variant>

    <Variant title="More Rows">
      <StoryCreateTextArea
        label-text="Description"
        :rows="8"
        place-holder="Enter your description here!"
      />
    </Variant>

    <Variant title="No Placeholder">
      <StoryCreateTextArea label-text="Description" />
    </Variant>

    <Variant title="Long Placeholder">
      <StoryCreateTextArea
        label-text="Description"
        place-holder="Ullamco amet labore veniam Lorem eiusmod duis laboru m esse sit. Nulla occaecat id anim dolor eiusmod fugiat Lorem aute adipisicing nulla. Do aute adipisicing anim culpa magna nulla elit."
      />
    </Variant>
  </Story>
</template>
