import { defineStore } from "pinia";
import ky from "ky-universal";

export type MonsterType = {
  _id: string;
  name: string;
  image: string;
};

export type DetailsMonsterType = {
  description: string;
  drops: string[];
  category: string;
} & MonsterType;

export const useMonstersStore = defineStore("monster", {
  state: () => ({
    monsters: [] as MonsterType[],
    page: 1,
    limit: 10,
  }),
  actions: {
    async fetchMonsters(page: number = 1) {
      try {
        const response = await ky(
          `https://metallo.ew.r.appspot.com/monsters?page=${this.page}&limit=${this.limit}`
        ).json<MonsterType[]>();

        this.monsters = response;
      } catch (error) {
        console.error("Failed to fetch monsters:", error);
      }
    },
    async fetchMonster(id: string) {
      try {
        const response = await ky(
          `https://metallo.ew.r.appspot.com/monsters/${id}`
        ).json<DetailsMonsterType>();

        return response;
      } catch (error) {
        console.error("Failed to fetch monster:", error);
      }
    },
    nextPage() {
      this.page++;
      this.fetchMonsters();
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
        this.fetchMonsters();
      }
    },
    modifyLimit(limit: number) {
      this.page = 1;
      this.limit = limit;
      this.fetchMonsters();
    },
  },
});
