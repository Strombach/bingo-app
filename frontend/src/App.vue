<script setup>
  import { fetchAllTasks } from './services/TaskService'

</script>

<template>
  <div id="app">
    <h1>BINGO!!!</h1>
    <router-link :to="'/'">Login</router-link> |
    <router-link :to="'/bingo'">Bingo</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
