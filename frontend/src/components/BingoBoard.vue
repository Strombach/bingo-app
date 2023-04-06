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

    async function updateTask(task) {
        console.log(task)

        const url = import.meta.env.VITE_API_URL

        const JWT = store.user.JWT

        const res = await fetch(`${url}/tasks/${task._id}`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${JWT}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isDone: task.isDone,
                lifeline: task.lifeline
            })
        })

        const jsonData = await res.json();

        console.log(jsonData)
    }

    getTasks()
</script>

<template>
    <div id="bingo">
        <div id="bingo_board">
            <BingoTile v-for="obj in tasks" :key="obj.id" :task="obj" :updateTask="updateTask"></BingoTile>
        </div>
    </div>
</template>

<style scoped>
    #bingo_board {
        display: grid;
        grid-template-columns: repeat(5, 20%);
        grid-template-rows: repeat(5, 20%);
    }
</style>
