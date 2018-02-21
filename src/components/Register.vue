<template>
    <div class="Register">
      <div class="content gray">
          <div class="content-padded">
            <p class="content-padded text-center">
              <img class="icon" src="@/components/assets/bea-icon.png">
            </p>
          </div>
          <div class="content-padded">
            <p class="content-padded text-center">Please Register your BEA Account!</p>
          </div>

          <form class="input-group">
            <div id="input" class="input-icon">
              <span class="icon icon-person"></span>
              <input class="login-icon" type="tel" placeholder="Your Mobilenumber">
            </div>
          </form>
          <button class="btn btn-block blue" @click="register" v-if="!loading">Register</button>

          <div class="content-padded">
              <pacman-loader :loading="loading" color="#00C8E6" class="pacloader"></pacman-loader>
          </div>

        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'


export default {
  name: 'Register',
  props: [],
  components: {
    PacmanLoader
  },
  data: function () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      token: state => state.accessToken
    })
  },
  methods: {
    register: function () {
      console.log('register!')
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push('/user')
      }, 2000)
    }
  },
  mounted () {

      console.log(this.$store.state)

  }
}
</script>

<style scoped>
  .icon {
    width: 50%;
  }
  .pacloader {
    width: 100px;
    margin: 10px auto;
  }
</style>
