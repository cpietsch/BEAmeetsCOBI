<template>
    <div class="Welcome">
      <div class="content gray">
          <div class="content-padded">
            <p class="content-padded text-center">Devpanel</p>
          </div>

          <a class="btn btn-block blue" href="#/register">Register</a>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
  name: 'Welcome',
  props: [],
  computed: {
    ...mapState({
      token: state => state.accessToken
    })
  },
  methods: {

  },
  mounted () {
      const view = COBI.parameters.state()
      console.log(view)

      if (view === 'edit') {
        this.$router.push('/register')
      }
      if (view === 'experience') {
        this.$router.push('/experience')
      }

  }
}
</script>

<style scoped>

</style>
