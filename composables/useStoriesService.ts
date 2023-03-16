import axios from 'axios';

export interface UserStory {
  key: number;
  summary: string;
  description: string;
  progress: string;
  points?: number;
  assignee?: string;
}

const FIRESTORE_URL =
  'https://j7ra-2023-default-rtdb.europe-west1.firebasedatabase.app/stories.json';

export default new (class {
  async getAllStories(): Promise<UserStory[]> {
    return axios.get(FIRESTORE_URL).then((response) => {
      const responseObject = response.data;
      const results: UserStory[] = [];

      for (const id of Object.keys(responseObject)) {
        results.push(responseObject[id]);
      }
      return results;
    });
  }

  async postStory(story: UserStory) {
    axios.post(FIRESTORE_URL, story);
  }

  putStories(stories: UserStory[]) {
    axios.put(FIRESTORE_URL, stories);
  }
})();
