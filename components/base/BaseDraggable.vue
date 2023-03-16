<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const draggable = ref(false);
  const element = ref();

  const props = defineProps<{
    id: number;
    story: UserStory;
  }>();

  onMounted(() => {
    element.value = document.getElementById(`${props.id}`);
  });

  const initX = ref(0);
  const initY = ref(0);

  const todo = document.getElementById('todo');
  const progress = document.getElementById('progress');
  const done = document.getElementById('done');
  const store = useStoryStore();

  const todoStart: Ref<number | null | undefined> = ref(0);
  const todoEnd: Ref<number | null | undefined> = ref(0);
  const progressStart: Ref<number | null | undefined> = ref(0);
  const progressEnd: Ref<number | null | undefined> = ref(0);
  const doneStart: Ref<number | null | undefined> = ref(0);
  const doneEnd: Ref<number | null | undefined> = ref(0);

  function setListBounds() {
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
    initX.value = event.screenX;
    initY.value = event.screenY;
  }

  function moveElement(event: any) {
    if (draggable.value === false) {
      return;
    }
    const diffX = event.screenX - initX.value;
    const diffY = event.screenY - initY.value;
    element.value.style.transform = `translate(${diffX}px, ${diffY}px)`;
  }

  function stopMovingElement(event: any) {
    element.value.style.transform = '';
    draggable.value = false;
    setListBounds();
    updateProgress(event);
  }

  function updateProgress(event: any) {
    console.log(event.clientX);

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
    @mousemove.left="moveElement"
    @mouseup="stopMovingElement"
    :class="`${draggable ? 'z-50' : ''}`"
  >
    <slot></slot>
  </div>
</template>
