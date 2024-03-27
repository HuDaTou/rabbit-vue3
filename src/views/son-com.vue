<!-- 子组件 -->
<template>
  <div class="son">
    <h3>子组件Son</h3>
  <div>父组件传入的数据 - {{ message }} - {{ count }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
    message: String,
    count: Number
})
console.log(props)
</script>

<style setup>

</style>
