<script setup>
    import { useUserStore } from '../stores/auth.store';
    import { useTaskStore } from '../stores/task.store';

    const store = useUserStore();
    const taskStore = useTaskStore();

    const props = defineProps({
        task: Object,
        onSelect: Function
    })

    function selecetTile() {
        props.onSelect(props.task)
    }
</script>

<template>
    <div class="bingo_tile"
        :class="{ isDone: task.isDone && !task.lifeline, lifeline: task.isDone && task.lifeline, selected: task._id === taskStore.selectedTask._id }"
        @click="selecetTile">
        <p>{{ task.task }}</p>
    </div>
</template>

<style scoped>
    .bingo_tile {
        border-style: solid;
        display: block;
        box-sizing: border-box;
    }

    .isDone {
        background-color: green;
    }

    .lifeline {
        background-color: yellow;
    }

    .selected {
        background-color: blue;
    }
</style>
