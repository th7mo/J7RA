import axios from 'axios';
import { Epic } from './epic';

const FIRESTORE_URL = 'https://j7ra-2023-default-rtdb.europe-west1.firebasedatabase.app/epics.json';

export default new (class {
  async getAllEpics(): Promise<Epic[]> {
    return axios.get(FIRESTORE_URL).then((response) => {
      const responseObject = response.data;
      const results: Epic[] = [];

      for (const id of Object.keys(responseObject)) {
        results.push(responseObject[id]);
      }
      return results;
    });
  }

  async postEpic(epic: Epic) {
    axios.post(FIRESTORE_URL, epic);
  }

  putEpics(epics: Epic[]) {
    axios.put(FIRESTORE_URL, epics);
  }
})();
