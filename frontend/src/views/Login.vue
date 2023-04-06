<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useUserStore } from '../stores/auth.store';

    const store = useUserStore();
    const router = useRouter();

    let username = ref('')
    let password = ref('')

    let failed = ref(false)

    async function login() {
        try {
            const res = await fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value
                })
            })

            if (res.status !== 200) throw new Error('Failed');

            const userData = await res.json()

            store.updateUser(userData)

            router.push({ path: '/' })
        } catch (error) {
            failed.value = true
            console.log(error)
        }
    }
</script>

<template>
    <p v-if="failed">WRONG USERNAME OR PASSWORD</p>
    <form @submit.prevent="login">
        <label>Username</label>
        <input type="text" v-model="username">
        <label>Password</label>
        <input type="password" v-model="password">
        <button type="submit">Login</button>
    </form>
</template>
