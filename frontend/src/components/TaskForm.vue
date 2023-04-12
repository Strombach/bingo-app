<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        onSave: Function,
        task: Object
    })

    let title = ref(props.task.task)

    function checkLifeline() {
        if (!props.task.isDone) {
            props.task.lifeline = false
        }
    }
</script>

<template>
    <div v-show="Object.keys(props.task).length">
        <h2 id="formTitle">Task form</h2>
        <form @submit.prevent="test" id="taskForm">
            <div class="box">
                <label for="task">Task: </label>
                <textarea name="task" id="task" rows="1" v-model="props.task.task"></textarea>
            </div>
            <div class="box">
                <label for="value">Description: </label>
                <textarea name="task" id="task" rows="3" v-model="props.task.description"></textarea>
            </div>
            <div class="isDone">
                <label for="isDone">Done: </label>
                <input type="checkbox" @change="checkLifeline" name="isDone" id="" v-model="props.task.isDone">
            </div>
            <div class="lifeline">
                <label for="lifeline">Used lifeline: </label>
                <input type="checkbox" @change="checkLifeline" name="lifeline" id="" v-model="props.task.lifeline">

            </div>
            <button @click="props.onSave">SAVE</button>
        </form>
    </div>
</template>

<style scoped>
    #formTitle {
        display: block;
        width: 100%;
    }

    #taskForm {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .box {
        margin: 10px;
        flex: 1 1 100%
    }

    textarea,
    input {
        width: 75%;
    }

    button {
        width: 100%;
    }
</style>
