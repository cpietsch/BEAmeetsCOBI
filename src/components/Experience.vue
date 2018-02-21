<template>
    <div class="Experience">
      <div class="content gray">
          <div class="content-padded">
            <p class="content-padded text-center">
              <img class="icon" src="@/components/assets/bea-icon.png">
            </p>
          </div>
          <div class="content-padded">
            <p class="content-padded text-center">{{ beta }}</p>
            <p class="content-padded text-center">{{ gamma }}</p>
          </div>

        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
  name: 'Experience',
  props: [],
  computed: {
    ...mapState({
      token: state => state.accessToken
    })
  },
  data: function () {
    return {
      beta: 0,
      gamma: 0
    }
  },
  methods: {
    handleOrientation: function (event) {
      this.gamma = event.gamma
      this.beta = event.beta
    }
  },
  mounted () {
      const view = COBI.parameters.state()
      console.log(view)

      window.addEventListener('deviceorientation', this.handleOrientation)

  }
}
</script>

<style scoped>

</style>
