<script setup>
    import { ref } from 'vue';
    import { useUserStore } from '../stores/auth.store';
    import { useTaskStore } from '../stores/task.store';

    const store = useUserStore();
    const taskStore = useTaskStore();

    const props = defineProps({
        task: Object,
        onSelect: Function
    })

    const task = ref(props.task)

    function selecetTile() {
        if (store.user.userType === 'svenne') return;
        props.onSelect(task)
    }
</script>

<template>
    <div class="bingo_tile"
        :class="{ isDone: task.isDone && !task.lifeline, lifeline: task.isDone && task.lifeline, selected: task._id === taskStore.selectedTask._id }"
        @click="selecetTile">
        <h4>{{ task.task }} - {{ task.id }}</h4>
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

    .selected {
        background-color: blue;
    }
</style>
