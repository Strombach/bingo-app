<script setup>
    import BingoTile from '../components/BingoTile.vue'
    import Summary from '../components/Summary.vue';
    import { useUserStore } from '../stores/auth.store';
    import { useTaskStore } from '../stores/task.store';
    import { useValuesStore } from '../stores/values.store';
    import TaskForm from './TaskForm.vue';
    import { socket } from '../socket'
    import { storeToRefs } from 'pinia';

    socket.connect()

    socket.on('test', (msg) => {
        getTasks()
    })

    const userStore = useUserStore();
    const JWT = userStore.user.JWT

    const taskStore = useTaskStore()

    const valuesStore = useValuesStore();
    valuesStore.fetchValues(JWT)

    const { allTasks } = storeToRefs(taskStore)
    const { values } = storeToRefs(valuesStore)


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
        taskStore.createArrayOfArrays()
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
    <Summary :sum="taskStore.total(valuesStore.values)"></Summary>
    <div id="bingo">
        <div id="bingo_board">
            <div class="bingo-col" v-for=" arr, index in allTasks">
                <BingoTile class="tile" v-for="obj in arr" :key="obj._id" :task="obj" :onSelect="handleSelect">
                </BingoTile>
            </div>
        </div>
    </div>
    <div id="info">
        <div class="content">
            <h3>{{ taskStore.selectedTask.task }}</h3>
            <p>{{ taskStore.selectedTask.description }}</p>
        </div>
    </div>
    <hr>
    <div class="form" v-if="userStore.user.userType !== 'svenne'" id="tile_form">
        <div class="taskForm">
            <TaskForm :onSave="updateTask" :task="taskStore.selectedTask"></TaskForm>
        </div>
    </div>
</template>

<style scoped>
    #bingo {
        /* min-height: 90vh; */
        margin: 0 auto;
    }

    #bingo_board {
        min-height: 50%;
        justify-content: center;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(5, 75px);
        grid-template-rows: repeat(5, 75px);
    }

    #info {
        margin: 20px 0 20px 0;
        display: flex;
        justify-content: center;
    }

    .content {
        max-width: 400px;
    }

    .tile {
        overflow: hidden;
        max-height: 75px;
        min-height: 75px;
    }

    #valCol {
        max-width: 20px;
        min-height: 75px;
    }

    .form {
        display: flex;
        justify-content: center;
    }

    .taskForm {
        max-width: 400px;
    }
</style>
