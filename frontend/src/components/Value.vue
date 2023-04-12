<script setup>
    import { defineProps, ref } from 'vue';

    const props = defineProps({
        value: Number,
        index: Number,
        onSave: Function
    })

    const newVal = ref(props.value)

    function save() {
        console.log(props.index)
        console.log(newVal.value)
    }
</script>

<template>
    <div id="values">
        <input type="number" v-model="newVal">
        <button @click="save">Save</button>
    </div>
</template>

<style scoped>
    input {
        max-width: 38px;
    }

    #values {
        height: 80px;
        max-width: 30px;
    }
</style>
