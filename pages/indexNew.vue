<template>
  <section class="container">
    {{ userList }}
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const userList = await $axios.$get('/users/')
    return { userList }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
