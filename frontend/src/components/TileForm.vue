<script setup>
    import { useTaskStore } from '../stores/task.store';

    const taskStore = useTaskStore()

    const props = defineProps({
        onSave: Function
    })
</script>

<template>
    <div v-show="taskStore.selectedTask" id="tileForm">
        <textarea name="" id="" cols="30" rows="1" v-model="taskStore.selectedTask._id"></textarea>
        <textarea name="" id="" cols="30" rows="1" v-model="taskStore.selectedTask.task"></textarea>
        <textarea name="" id="" cols="30" rows="1" v-model="taskStore.selectedTask.value"></textarea>
        <button @click="props.onSave">SAVE</button>
    </div>
</template>

<style scoped>
</style>
