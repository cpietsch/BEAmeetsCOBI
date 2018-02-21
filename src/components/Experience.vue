<template>
    <div class="Experience">
      <div class="content gray">

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
  methods: {

  },
  mounted () {
      const view = COBI.parameters.state()
      console.log(view)
  }
}
</script>

<style scoped>

</style>
