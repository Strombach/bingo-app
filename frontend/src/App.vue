<script setup>
  import { fetchAllTasks } from './services/TaskService'

</script>

<template>
  <div id="app">
    <h1>BINGO!!!</h1>
    <router-link :to="'/login'">Login</router-link> |
    <router-link :to="'/'">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
