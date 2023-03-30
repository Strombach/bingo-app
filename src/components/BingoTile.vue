<script setup>
    const props = defineProps({
        task: Object
    })

    function toggleState() {
        console.log("HELLLO")
        props.task.done = !props.task.done
    }
</script>

<template>
    <div class="bingo_tile" :class="{ 'task_done': task.done && !task.lifeline, 'lifeline': task.done && task.lifeline }"
        @click="toggleState">
        <h4>{{ task.activity }} - {{ task.id }}</h4>
        <p>{{ task.value }}</p>
    </div>
</template>

<style scoped>
    .bingo_tile {
        border-style: solid;
    }

    .task_done {
        background-color: green;
    }

    .lifeline {
        background-color: yellow;
    }
</style>
