<script setup lang="ts">
  const draggable = ref(false);
  const element = ref();

  const props = defineProps<{
    id: number;
  }>();

  onMounted(() => {
    element.value = document.getElementById(`${props.id}`);
  });

  const initX = ref(0);
  const initY = ref(0);

  function setDraggable(event: any) {
    console.log('fefefef');

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

  function stopMovingElement() {
    element.value.style.transform = '';
    draggable.value = false;
  }
</script>

<template>
  <div
    @mousedown="setDraggable"
    @mousemove="moveElement"
    @mouseup="stopMovingElement"
    :class="`${draggable ? 'z-50' : ''}`"
  >
    <slot></slot>
  </div>
</template>
