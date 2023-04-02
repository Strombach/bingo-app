<script setup>
  import arr from '../test.json';
  import BingoTile from './components/BingoTile.vue'
</script>

<template>
  <div id="app">
    <h1>BINGO!!!</h1>
    <div id="bingo_board">
      <BingoTile v-for="obj in arr" :key="obj.id" :task="obj">{{ obj.activity }} - {{ obj.value }}</BingoTile>
    </div>
  </div>
</template>

<style scoped>
  #bingo_board {
    display: grid;
    grid-template-columns: repeat(5, 20%);
  }
</style>
