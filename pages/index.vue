<template>
  <section class="container">
    <div v-if="submited">
      <user-welcome :user="user" />
      <transition name="fade" mode="out-in">
        <tic-tac-toe v-if="winner === '' && submited" @win="handleWinner" />
        <div v-else>
          <div v-if="winner === 'X'">
            You are the boss !
            <br />
            Check your stats : <strong>Number of win: {{ user.wins }}</strong>
          </div>
          <div v-else>
            LOL
          </div>
          <a class="button is-primary" @click="onRerun">
            Play again to this awesome game ?
          </a>
        </div>
      </transition>
    </div>
    <div v-else>
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="name"
            class="input is-success"
            type="text"
            placeholder="Please, enter your gameTag"
          />
        </div>
      </div>
      <a class="button is-primary" @click="onSubmit">Click</a>
    </div>
  </section>
</template>

<script>
import TicTacToe from '~/components/TicTacToe.vue'
import UserWelcome from '~/components/UserWelcome.vue'

export default {
  components: {
    TicTacToe,
    UserWelcome
  },
  data() {
    return {
      winner: '',
      name: '',
      submited: false,
      user: {}
    }
  },
  methods: {
    onRerun() {
      this.winner = ''
    },
    async handleWinner(winner) {
      if (winner === 'X') {
        this.user = await this.$axios
          .$put('/users/' + this.user.id, {
            wins: this.user.wins !== null ? this.user.wins + 1 : 1
          })
          .catch(err => {
            console.log(err.response)
          })
      }
      this.winner = winner
    },
    async onSubmit() {
      this.user = await this.$axios.$post('/users/', { name: this.name })
      this.submited = true
    }
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
