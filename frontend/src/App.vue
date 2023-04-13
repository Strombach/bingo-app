<script setup>
  import { useUserStore } from './stores/auth.store';

  const store = useUserStore();
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
