import { defineStore } from 'pinia';
import { Epic } from './epic';

export const useEpicStore = defineStore('epics', {
  state: () => ({
    epics: [] as Epic[],
    isCreatingEpic: false,
    isEditingEpic: false,
    currentEpic: {} as Epic,
  }),

  actions: {
    async fetchEpics() {
      this.epics = await epicService.getAllEpics();
    },

    postEpic(epic: Epic) {
      epic.id = this.getHighestKey() + 1;
      this.epics.push(epic);
      epicService.postEpic(epic);
    },

    putEpics() {
      epicService.putEpics(this.epics);
    },

    getHighestKey() {
      let highestKey = 0;
      for (const epic of this.epics) {
        highestKey = Math.max(epic.id, highestKey);
      }
      return highestKey;
    },
  },
});
