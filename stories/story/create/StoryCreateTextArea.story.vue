<script setup lang="ts">
  const description =
    'Ea est nisi duis id ipsum id pariatur officia Lorem deserunt nostrud pariatur officia non. Consequat eu laboris nisi ut laboris culpa ut anim ea laborum minim. Sunt consequat ad dolor non proident aliquip fugiat ad ipsum. Anim consectetur occaecat occaecat labore incididunt. Magna pariatur deserunt quis et commodo. Amet ex quis aliqua amet in enim magna. Cupidatat irure duis duis velit cupidatat mollit incididunt.';
</script>

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

    <Variant title="Borderless Editable">
      <StoryCreateTextArea borderless v-model="description" />
    </Variant>
  </Story>
</template>
