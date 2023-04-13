<script setup>
    import { useUserStore } from '../stores/auth.store';

    const store = useUserStore();

    const rules = ''

    async function fetchRules() {

    }

</script>

<template>
    <h1>Davids Svensexebingo</h1>
    <div class="logout">
        <button @click="logout">Logout</button>
    </div>
    <div id="nav">
        <router-link v-if="!store.user" :to="'/login'">Login</router-link>
        <router-link :to="'/'">Bingo</router-link>
        |
        <router-link :to="'/rules'">Rules</router-link>
    </div>
    <h1>Regler</h1>
</template>

<style scoped>
    #nav {
        margin: 20px 0px 20px 0px;
    }
</style>
