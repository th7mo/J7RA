<script setup lang="ts">
import { ref } from 'vue';
import NewUserStoryPopup from './components/user_stories/NewUserStoryPopup.vue';

const needToShowDialog = ref(true)

function closeDialog() {
  needToShowDialog.value = false
}
</script>

<template>
  <p>Sint laboris ipsum cupidatat esse duis minim ad commodo dolore esse.</p>
  <NewUserStoryPopup v-if="needToShowDialog" @close="closeDialog" />
</template>
