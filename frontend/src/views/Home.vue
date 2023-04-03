<script setup>
    import arr from '../../test.json';
    import BingoTile from '../components/BingoTile.vue'
</script>

<template>
    <div id="bingo">
        <div id="bingo_board">
            <BingoTile v-for="obj in arr" :key="obj.id" :task="obj">{{ obj.activity }} - {{ obj.value }}</BingoTile>
        </div>
        <h2>Hello from Home vue</h2>
    </div>
</template>

<style scoped>
    #bingo_board {
        display: grid;
        grid-template-columns: repeat(5, 20%);
    }
</style>
