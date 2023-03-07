<script setup lang="ts">
import PopupOverlay from './components/libs/PopupOverlay.vue';
import NewUserStoryFieldTextArea from './components/user_stories/NewUserStoryFieldTextArea.vue';

</script>

<template>
  <NewUserStoryFieldTextArea :required="true" label-text="Default"/>
  <PopupOverlay><strong>Go!</strong></PopupOverlay>
</template>
