<script setup>
    import { useTaskStore } from '../stores/task.store';

    const taskStore = useTaskStore()

    const props = defineProps({
        onSave: Function
    })

    function checkLifeline() {
        if (!taskStore.selectedTask.isDone) {
            taskStore.selectedTask.lifeline = false
        }
    }

</script>

<template>
    <div v-show="taskStore.selectedTask" id="tileForm">
        <h3>ID: {{ taskStore.selectedTask._id }}</h3>
        <textarea name="" id="" cols="30" rows="1" v-model="taskStore.selectedTask._id"></textarea>
        <label for="task">Task: </label>
        <textarea name="task" id="" cols="30" rows="2" v-model="taskStore.selectedTask.task"></textarea>
        <label for="value">Worth (SEK): </label>
        <textarea name="value" id="" cols="30" rows="1" v-model="taskStore.selectedTask.value"></textarea>
        <label for="isDone">Done: </label>
        <input type="checkbox" @change="checkLifeline" name="isDone" id="" v-model="taskStore.selectedTask.isDone">
        <label for="lifeline">Used lifeline: </label>
        <input type="checkbox" @change="checkLifeline" name="lifeline" id="" v-model="taskStore.selectedTask.lifeline">
        <button @click="props.onSave">SAVE</button>
    </div>
</template>

<style scoped>
</style>
