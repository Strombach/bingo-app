<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        sum: Number
    })
</script>

<template>
    <div>
        <p>Sum: {{ props.sum }}</p>
    </div>
</template>

<style scoped>
</style>
