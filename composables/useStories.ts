import { defineStore } from 'pinia';
import { Epic } from './epic';
import { UserStory } from './useStoriesService';

export const useStoryStore = defineStore('stories', {
  state: () => ({
    stories: [] as UserStory[],
    isEditingStory: false,
    isCreatingStory: false,
    currentStory: undefined as UserStory | undefined,
  }),

  getters: {
    getStories(state) {
      return state.stories;
    },

    getIsEditingStory(state) {
      return state.isEditingStory;
    },

    getIsCreatingStory(state) {
      return state.isCreatingStory;
    },

    getCurrentStory(state) {
      return state.currentStory;
    },
  },

  actions: {
    async fetchStories() {
      this.stories = await useStoriesService.getAllStories();
    },

    setCurrentStory(story: UserStory | undefined) {
      this.currentStory = story;
    },

    setIsEditingStory(isEditingStory: boolean) {
      this.isEditingStory = isEditingStory;
    },

    setIsCreatingStory(isCreatingStory: boolean) {
      this.isCreatingStory = isCreatingStory;
    },

    saveStories() {
      useStoriesService.putStories(this.stories);
    },

    getTodoStories() {
      return this.stories.filter((story) => story.progress === 'To Do');
    },

    getInProgressStories() {
      return this.stories.filter((story) => story.progress === 'In Progress');
    },

    getDoneStories() {
      return this.stories.filter((story) => story.progress === 'Done');
    },

    getHighestKey() {
      let highestKey = 0;
      for (const story of this.stories) {
        highestKey = Math.max(story.key, highestKey);
      }
      return highestKey;
    },

    async addStory(story: UserStory) {
      story.key = this.getHighestKey() + 1;
      this.stories.push(story);
      useStoriesService.postStory(story);
    },

    deleteStory(storyKey: number) {
      this.stories = this.stories.filter((story) => story.key !== storyKey);
      useStoriesService.putStories(this.stories);
    },
  },
});
