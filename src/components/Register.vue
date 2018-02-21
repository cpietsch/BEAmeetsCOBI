<template>
    <div class="Register">
      <div class="content gray">
          <div class="content-padded">
            <p class="content-padded text-center">Please Register your BEA Account!</p>
          </div>

          <form class="input-group">
            <div id="input" class="input-icon">
              <span class="icon icon-person"></span>
              <input class="login-icon" type="tel" placeholder="Your Mobilenumber">
            </div>
          </form>
          <button class="btn btn-block blue" @click="register">Register</button>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
  name: 'Register',
  props: [],
  computed: {
    ...mapState({
      token: state => state.accessToken
    })
  },
  methods: {
    register: function () {
      console.log('register!')
    }
  },
  mounted () {

      console.log(this.$store.state)

  }
}
</script>

<style scoped>

</style>
