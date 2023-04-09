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
    | <button @click="logout">Logout</button>
    <BingoBoard></BingoBoard>
</template>

<style scoped>
</style>
