<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const draggable = ref(false);
  const element = ref();

  const props = defineProps<{
    story: UserStory;
  }>();

  onMounted(() => {
    element.value = document.getElementById(`${props.story.key}`);
  });

  const initX = ref(0);
  const initY = ref(0);

  const store = useStoryStore();

  const todoStart: Ref<number | null | undefined> = ref(0);
  const todoEnd: Ref<number | null | undefined> = ref(0);
  const progressStart: Ref<number | null | undefined> = ref(0);
  const progressEnd: Ref<number | null | undefined> = ref(0);
  const doneStart: Ref<number | null | undefined> = ref(0);
  const doneEnd: Ref<number | null | undefined> = ref(0);

  function setListBounds() {
    let todo = document.getElementById('todo');
    let progress = document.getElementById('progress');
    let done = document.getElementById('done');
    if (!todo || !progress || !done) {
      return;
    }
    todoStart.value = todo.getBoundingClientRect().left;
    todoEnd.value = todo.getBoundingClientRect().right;
    progressStart.value = progress.getBoundingClientRect().left;
    progressEnd.value = progress.getBoundingClientRect().right;
    doneStart.value = done.getBoundingClientRect().left;
    doneEnd.value = done.getBoundingClientRect().right;
  }

  function setDraggable(event: any) {
    draggable.value = true;
    initX.value = event.clientX;
    initY.value = event.clientY;
  }

  window.addEventListener('mousemove', (event) => {
    moveElement(event);
  });

  window.addEventListener('mouseup', (event) => {
    stopMovingElement(event);
  });

  function moveElement(event: any) {
    if (draggable.value === false) {
      return;
    }
    const diffX = event.clientX - initX.value;
    const diffY = event.clientY - initY.value;
    element.value.style.transform = `translate(${diffX}px, ${diffY}px)`;
  }

  function stopMovingElement(event: any) {
    if (draggable.value === false) {
      return;
    }
    draggable.value = false;
    setListBounds();
    updateProgress(event);
    element.value.style.transform = '';
  }

  function updateProgress(event: any) {
    if (
      todoStart.value &&
      todoEnd.value &&
      event.clientX > todoStart.value &&
      event.clientX < todoEnd.value
    ) {
      props.story.progress = 'To Do';
      store.saveStories();
    } else if (
      progressStart.value &&
      progressEnd.value &&
      event.clientX > progressStart.value &&
      event.clientX < progressEnd.value
    ) {
      props.story.progress = 'In Progress';
      store.saveStories();
    } else if (
      doneStart.value &&
      doneEnd.value &&
      event.clientX > doneStart.value &&
      event.clientX < doneEnd.value
    ) {
      props.story.progress = 'Done';
      store.saveStories();
    }
  }
</script>

<template>
  <div
    @mousedown.left="setDraggable"
    :class="`${draggable ? 'z-50 hover:cursor-grabbing' : 'hover:cursor-grab'}`"
  >
    <slot></slot>
  </div>
</template>
