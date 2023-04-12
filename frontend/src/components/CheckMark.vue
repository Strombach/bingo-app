<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        checked: Boolean
    })

    const stopClick = () => {
        return false
    }
</script>

<template>
    <div>
        <input type="checkbox" v-model="props.checked">
    </div>
</template>

<style scoped>
    input:checked {
        color: green;
    }
</style>
