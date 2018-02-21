<template>
    <div class="User">
      <div class="content gray">
          <div class="content-padded">
            <p class="content-padded text-center">
              <img class="icon" src="@/components/assets/bea-icon.png">
            </p>
          </div>
          <div class="content-padded">
            <p class="content-padded text-center">Welcome Herbert Meier!</p>
            <p class="content-padded text-center">You now are in the comfort of calling an emergency assistant from within COBI!</p>
            <p class="content-padded text-center">Unsere Agenten sind rund um die Uhr erreichbar, um Ihren Kunden im Notfall zu helfen.</p>
          </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
  name: 'User',
  props: [],
  computed: {
    ...mapState({
      token: state => state.accessToken
    })
  },
  methods: {

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
</style>
