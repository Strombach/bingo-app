<script setup>
    import BingoTile from '../components/BingoTile.vue'
    import Summary from '../components/Summary.vue';
    import { useUserStore } from '../stores/auth.store';
    import { useTaskStore } from '../stores/task.store';
    import TaskForm from './TaskForm.vue';
    import { socket } from '../socket'

    socket.connect()

    socket.on('test', (msg) => {
        getTasks()
    })

    const userStore = useUserStore();
    const taskStore = useTaskStore()
    const JWT = userStore.user.JWT

    let uri = '/api/tasks'

    if (import.meta.env.VITE_ENV === 'dev') {
        uri = 'http://localhost:4000' + uri
    }

    async function getTasks() {

        const res = await fetch(uri, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${JWT}`,
                "Content-Type": "application/json"
            }
        })

        const jsonData = await res.json();

        taskStore.allTasks = jsonData

        taskStore.updateTask()
        console.log('WS Update!')
    }

    async function updateTask() {
        const updatedTask = taskStore.selectedTask

        await fetch(`${uri}/${updatedTask._id}`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${JWT}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ updatedTask })
        })

        taskStore.updateTask()
    }

    function handleSelect(task) {
        taskStore.selectTask(task)
    }

    getTasks()
</script>

<template>
    <div id="bingo">
        <Summary :sum="taskStore.total"></Summary>
        <div id="bingo_board">
            <BingoTile v-for="obj in taskStore.allTasks" :key="obj.id" :task="obj" :onSelect="handleSelect"></BingoTile>
        </div>
        <div v-if="userStore.user.userType !== 'svenne'" id="tile_form">
            <TaskForm :onSave="updateTask" :task="taskStore.selectedTask"></TaskForm>
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
