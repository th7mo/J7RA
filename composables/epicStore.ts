import { defineStore } from 'pinia';
import { Epic } from './epic';
import { UserStory } from './useStoriesService';

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

    deleteEpic(epicId: number) {
      this.epics = this.epics.filter((epic) => epic.id !== epicId);
      epicService.putEpics(this.epics);
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

    getEpic(id: number | undefined): Epic | undefined {
      if (id === undefined) {
        return undefined;
      }
      for (const epic of this.epics) {
        if (epic.id === id) {
          return epic;
        }
      }

      return undefined;
    },
  },
});
