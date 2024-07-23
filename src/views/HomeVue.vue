<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <h1>home</h1>
    <RouterLink :to="{ name: 'Child' }">child</RouterLink>
    <RouterView></RouterView>
  </div>
</template>

<style></style>
