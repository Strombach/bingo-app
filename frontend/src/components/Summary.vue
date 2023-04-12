<script setup>
    const props = defineProps({
        sum: Number,
        checkRows: Function
    })
</script>

<template>
    <div>
        <p>Sum: {{ props.sum }}</p>
    </div>
</template>

<style scoped>
</style>
