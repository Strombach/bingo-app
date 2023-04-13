<script setup>
  import { useUserStore } from './stores/auth.store';

  const store = useUserStore();
</script>

<template>
  <div id="nav">
    <h1>BINGO!!!</h1>
    <router-link v-if="!store.user" :to="'/login'">Login</router-link>
    <router-link :to="'/'">Bingo</router-link>
    |
    <router-link :to="'/'">Rules</router-link>
    | <button @click="logout">Logout</button>
  </div>
  <router-view></router-view>
</template>

<style scoped>
</style>
