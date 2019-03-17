<template>
  <div v-if="messageShow && user" class="notification is-primary">
    <button class="delete" @click="messageShow = false"></button>
    Welcome to the jungle
    <strong>{{ user.name }}</strong>
    Enjoy the PARTY
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      messageShow: true
    }
  }
}
</script>

<style scoped></style>
