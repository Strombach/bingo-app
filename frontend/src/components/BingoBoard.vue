<script setup>
    import { ref } from 'vue';
    import BingoTile from '../components/BingoTile.vue'
    import { useUserStore } from '../stores/auth.store';

    const store = useUserStore();

    const tasks = ref([]);

    async function getTasks() {
        const url = import.meta.env.VITE_API_URL

        const JWT = store.user.JWT

        const res = await fetch(`${url}/tasks`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${JWT}`,
                "Content-Type": "application/json"
            }
        })

        const jsonData = await res.json();

        tasks.value = jsonData
    }

    getTasks()
</script>

<template>
    <div id="bingo_board">
        <BingoTile v-for="obj in tasks" :key="obj.id" :task="obj"></BingoTile>
    </div>
</template>

<style scoped>
</style>
