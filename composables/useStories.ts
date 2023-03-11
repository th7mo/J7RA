import { defineStore } from 'pinia';
import { UserStory } from './useStoriesService';

export const useStoryStore = defineStore('stories', {
  state: () => ({
    stories: [] as UserStory[],
  }),

  getters: {
    getStories(state) {
      return state.stories;
    }
  },

  actions: {
    async fetchStories() {
      this.stories = await useStoriesService.getAllStories();
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
  },
});
