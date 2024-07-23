<template>
  <h1>This is Child</h1>
  <RouterLink :to="{ name: 'User01', params: { id: '01' } }">btn1</RouterLink>
  <br />
  <RouterLink :to="{ name: 'User02', params: { groupName: 'TW' } }">btn2</RouterLink>
  <div>
    <button @click="toUser01">toUser01</button>
  </div>
  <div>
    <button @click="toUser02">toUser02</button>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

function toUser01() {
  router.push({ name: 'User01', params: { id: '01' } })
}
function toUser02() {
  router.push({ name: 'User02', params: { groupName: 'TW' } })
}
</script>

<style></style>
