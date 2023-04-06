<script setup>
    import { ref } from 'vue';
    import BingoTile from '../components/BingoTile.vue'
    import { useUserStore } from '../stores/auth.store';

    const store = useUserStore();

    const tasks = ref([]);

    const JWT = store.user.JWT

    async function getTasks() {

        const res = await fetch(`/api/tasks`, {
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
        const res = await fetch(`/api/tasks/${task._id}`, {
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
