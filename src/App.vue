<script setup lang="ts">
import { ref } from 'vue';
import PopupOverlay from './components/libs/PopupOverlay.vue';
import NewUserStoryFieldTextArea from './components/user_stories/NewUserStoryFieldTextArea.vue';
import NewUserStoryPopup from './components/user_stories/NewUserStoryPopup.vue';

const needToShowDialog = ref(true)

function closeDialog() {
  needToShowDialog.value = false
}
</script>

<template>
  <NewUserStoryFieldTextArea :required="true" label-text="Default"/>
  <NewUserStoryPopup v-if="needToShowDialog" @close="closeDialog" />
</template>
