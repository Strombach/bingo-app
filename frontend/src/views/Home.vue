<script setup>
    import BingoBoard from '../components/BingoBoard.vue';
    import { useRouter } from 'vue-router';
    import { useUserStore } from '../stores/auth.store';

    const store = useUserStore();
    const router = useRouter();

    function logout() {
        store.logoutUser(store.user)
        router.push({ path: '/login' })
    }
</script>

<template>
    <div id="nav">
        <h1>BINGO!!!</h1>
        <router-link :to="'/login'">Login</router-link> |
        <router-link :to="'/'">Bingo</router-link>
        | <button @click="logout">Logout</button>
    </div>
    <BingoBoard></BingoBoard>
</template>

<style scoped>
    #nav {
        min-height: 10vh;
    }
</style>
