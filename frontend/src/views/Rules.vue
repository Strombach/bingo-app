<script setup>
    import { ref } from 'vue';
    import { useUserStore } from '../stores/auth.store';

    const store = useUserStore();
    const JWT = store.user.JWT

    const rules = ref('')

    async function fetchRules() {
        const res = await fetch('http://localhost:4000/api/rules', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${JWT}`,
                "Content-Type": "application/json"
            }
        })

        const json = await res.json();
        rules.value = json.rules
    }

    fetchRules()

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
    <div class="content">
        <div class="rules">
            <p>{{ rules }}</p>
        </div>
    </div>
</template>

<style scoped>
    #nav {
        margin: 20px 0px 20px 0px;
    }

    .content {
        display: flex;
        justify-content: center;
    }

    .rules {
        max-width: 400px;
    }
</style>
