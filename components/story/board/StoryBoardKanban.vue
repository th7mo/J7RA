<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  const store = useStoryStore();
  
  const todoStories = computed(() => {
    return store.getTodoStories();
  });

  const inProgressStories = computed(() => {
    return store.getInProgressStories();
  });

  const doneStories = computed(() => {
    return store.getDoneStories();
  });

  const todo = ref<HTMLUListElement | null>();
  const progress = ref<HTMLUListElement | null>();
  const done = ref<HTMLUListElement | null>();

  const todoStart: Ref<number | null | undefined> = ref(0);
  const todoEnd: Ref<number | null | undefined> = ref(0);
  const progressStart: Ref<number | null | undefined> = ref(0);
  const progressEnd: Ref<number | null | undefined> = ref(0);
  const doneStart: Ref<number | null | undefined> = ref(0);
  const doneEnd: Ref<number | null | undefined> = ref(0);

  onMounted(() => {
    store.fetchStories();
    todoStart.value = todo.value?.getBoundingClientRect().left;
    todoEnd.value = todo.value?.getBoundingClientRect().right;
    progressStart.value = progress.value?.getBoundingClientRect().left;
    progressEnd.value = progress.value?.getBoundingClientRect().right;
    doneStart.value = done.value?.getBoundingClientRect().left;
    doneEnd.value = done.value?.getBoundingClientRect().right;
  });
</script>

<template>
  <ul class="max-w-4xl grid grid-cols-3 gap-4">
    <li ref="todo">
      <StoryBoardList :stories="todoStories" create-row-hidden title="To Do" kanban-style />
    </li>
    <li ref="progress">
      <StoryBoardList
        :stories="inProgressStories"
        create-row-hidden
        title="In Progress"
        kanban-style
      />
    </li>
    <li ref="done">
      <StoryBoardList :stories="doneStories" create-row-hidden title="Done" kanban-style />
    </li>
  </ul>
</template>
