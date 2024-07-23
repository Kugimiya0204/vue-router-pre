<template>
  <h1>ID:{{ $route.params.id }} 姓名:王小名 年齡:19 性別:男</h1>
  <RouterLink to="/">home</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style></style>
