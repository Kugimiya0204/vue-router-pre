<script setup>
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
const input = ref(null)

function changeView() {
  router.push('/User/' + input.value)
}
</script>

<template>
  <RouterView name="Navbar1"></RouterView>
  <div>
    <!-- 輸入為數字跳轉user01，其他跳轉user02 -->
    <input type="text" v-model="input" />
    <button type="button" @click="changeView()">跳轉</button>
  </div>
  <RouterView></RouterView>
  <RouterView name="Navbar2"></RouterView>
</template>

<style scoped></style>
