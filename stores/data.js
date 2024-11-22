import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        data: null,
    }),
    actions: {
        async fetchData() {
            const response = await fetch('http://localhost:3000/data');
            this.data = await response.json();
        }
    }
})