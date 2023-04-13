<script setup>
    const props = defineProps({
        sum: Number,
        checkRows: Function
    })
</script>

<template>
    <div class="sum">
        <div class="content">
            <h3>Summa: {{ props.sum }}</h3>
        </div>
    </div>
</template>

<style scoped>
    .sum {
        display: flex;
        justify-content: center;
    }

    .content {
        max-width: 200px;
    }
</style>
