<template>
    <div class="test">

    </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'test',
  props: [],
  computed: {
    ...mapState({
      token: state => state.accessToken
    })
  },
  methods: {
    login: function () {

    },
    test: function () {

    }
  },
  mounted () {

      console.log(this.$store.state)

  }
}
</script>

<style scoped>

</style>
