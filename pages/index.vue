<template>
  <div>
    {{ state.data }}
  </div>
</template>
<script lang='ts' setup>
import { reactive, computed, onMounted, onUnmounted, ref } from 'vue'
const { userApi } = useApi()

const state = reactive({
  data: {}
})

state.data = await userApi.sign({account: 'huang',password: '1234'})
// const data = await useFetch('http://127.0.0.1:3001/test')
// const data = await useFetch('http://127.0.0.1:3001/sign',{method:'post'})

// console.log(data);

</script>
<style lang="scss" scoped></style>