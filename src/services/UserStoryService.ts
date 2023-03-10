import axios from 'axios';

export interface UserStory {
    key: number,
    summary: string,
    description: string,
}

const FIRESTORE_URL = "https://j7ra-2023-default-rtdb.europe-west1.firebasedatabase.app/stories.json"

export default new class {
    highestKey = 0;

    async getAllStories(): Promise<UserStory[]> {
        return axios.get(FIRESTORE_URL).then(response => {
            const responseObject = response.data;
            const results: UserStory[] = [];

            for (const id of Object.keys(responseObject)) {
                this.highestKey = Math.max(responseObject[id].key, this.highestKey);
                results.push(responseObject[id]);
            }
            return results;
        });
    }

    async postStory(story: UserStory) {
        await this.getAllStories();
        story.key = this.highestKey + 1;
        axios.post(FIRESTORE_URL, story);
    }
}
