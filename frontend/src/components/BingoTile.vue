<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        task: Object
    })

    const task = ref(props.task)

    function toggleState() {
        if (task.value.isDone && !task.value.lifeline) {
            task.value.lifeline = !task.value.lifeline
        } else if (task.value.isDone && task.value.lifeline) {
            task.value.isDone = !task.value.isDone
            task.value.lifeline = !task.value.lifeline
        }
        else {
            task.value.isDone = !task.value.isDone
        }
    }
</script>

<template>
    <div class="bingo_tile" :class="{ isDone: task.isDone && !task.lifeline, lifeline: task.isDone && task.lifeline }"
        @click="toggleState">
        <h4>{{ task.activity }} - {{ task.id }}</h4>
        <p>{{ task.value }}</p>
    </div>
</template>

<style scoped>
    .bingo_tile {
        border-style: solid;
    }

    .isDone {
        background-color: green;
    }

    .lifeline {
        background-color: yellow;
    }
</style>
