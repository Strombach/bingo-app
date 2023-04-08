<script setup>
</script>

<template>
  <h1>BINGO!!!</h1>
  <router-link :to="'/login'">Login</router-link> |
  <router-link :to="'/'">Bingo</router-link>
  <router-view></router-view>
</template>

<style scoped>
</style>
