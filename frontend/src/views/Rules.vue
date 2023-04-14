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
            <!-- <p>{{ rules }}</p> -->
            <p>1. You do not talk about Fight Club.</p>
            <p>2. You do NOT talk about Svensexa.</p>
            <p>3. Alla tasks är frivilliga.</p>
            <p>4. Det måste finnas bildbevis för att en task ska bli godkänd.</p>
            <p>5. Bestmans godkänner tasksen och har sista ordet.</p>
            <p>6. Tasksen får ej kombineras utan ska göras var för sig.</p>
            <p>7. Brudgummen måste under alla tasks ha minst tre klädesplagg på sig.</p>

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
