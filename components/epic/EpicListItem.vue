<script setup lang="ts">
  import { Epic } from '~~/composables/epic';

  const props = defineProps<{
    epic: Epic;
    modelValue: number[];
  }>();

  const epicStore = useEpicStore();
  const storyStore = useStoryStore();

  const emit = defineEmits(['update:modelValue']);

  const model = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });

  function editEpic() {
    epicStore.currentEpic = props.epic;
    epicStore.isEditingEpic = true;
  }

  function save() {
    epicStore.putEpics();
  }

  const stories = computed(() => {
    return storyStore.getStoriesOfEpics([props.epic.id]);
  });
  const todo = computed(() => {
    return getAmountOfStoriesWithProgress('To Do');
  });

  const inProgress = computed(() => {
    return getAmountOfStoriesWithProgress('In Progress');
  });

  const done = computed(() => {
    return getAmountOfStoriesWithProgress('Done');
  });

  function getAmountOfStoriesWithProgress(targetProgress: string): number {
    let count = 0;
    for (const story of stories.value) {
      if (story.progress === targetProgress) {
        count++;
      }
    }
    return count;
  }
</script>

<template>
  <li class="rounded shadow border border-gray-300 bg-white p-[6px] grid gap-1 items-center">
    <BaseCheckbox :epic="epic" v-model="model" class="ml-1" />
    <p
      class="font-bold text-[0.77rem] hover:bg-gray-100 hover:cursor-pointer rounded py-1 px-2"
      @click="editEpic"
    >
      EPIC-{{ epic.id }}
    </p>
    <BaseInput v-model="epic.name" class="text-sm py-[2px]" borderless @blur="save" />
    <EpicOptions class="justify-self-end" :epic="epic" />
    <EpicProgressBar
      class="col-span-3 mx-7"
      :epic="epic"
      :todo="todo"
      :in-progress="inProgress"
      :done="done"
    />
    <ul class="flex gap-1">
      <li>
        <BaseLabel green>{{ done }}</BaseLabel>
      </li>
      <li>
        <BaseLabel blue>{{ inProgress }}</BaseLabel>
      </li>
      <li>
        <BaseLabel gray>{{ todo }}</BaseLabel>
      </li>
    </ul>
  </li>
</template>

<style scoped>
  li {
    grid-template-columns: auto auto 1fr auto;
  }
</style>
