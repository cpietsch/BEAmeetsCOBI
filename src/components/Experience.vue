<template>
    <div class="Experience">
      <div class="content gray">
          <div class="content-padded right">
            <p class="content-padded text-center">
              <img @click="call" class="icon" src="@/components/assets/bea-icon.png">
              <vue-circle
                      :progress="100"
                      :size="200"
                      :reverse="false"
                      line-cap="round"
                      :fill="{ color: '#000' }"
                      empty-fill="rgba(0, 0, 0, .1)"
                      :animation-start-value="0.0"
                      :start-angle="0"
                      insert-mode="append"
                      :thickness="10"
                      :show-percent="false"
                      :animation="{ duration: 10000, easing: 'linear' }"
                      @vue-circle-end="progress_end"
                      class="circle"
                      v-if="fallDeteced"
                      >

                    </vue-circle>
            </p>
            <button class="btn" @click="call" v-if="!fallDeteced && !calling">Trigger emergency event</button>
            <button class="btn" @click="cancelCall" v-if="fallDeteced && !calling">Cancel emergency event</button>
            <button class="btn" @click="cancelCall" v-if="calling">Contacting Bosch Emergency Assistant...</button>
            <p class="content-padded text-center" v-if="calling">Help is on the way, try to stay cool</p>
            <!-- <button class="btn "></button> -->
          </div>
        <!--   <div class="content-padded">
            <p class="content-padded text-center" v-if="fallDeteced">DID YOU FALL ?</p>
            <p class="content-padded text-center">{{ beta }}</p>
            <p class="content-padded text-center">{{ gamma }}</p>
          </div> -->

          <div :class="['left', fallDeteced ? 'fall' : '']">
            <skew-loader :loading="true" color="#888" class="loader" size="10px"></skew-loader>
            <div class="label" v-if="!fallDeteced">Monitoring for crashes</div>
            <div class="label" v-if="fallDeteced">Crash detected!</div>
          </div>

        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import SkewLoader from 'vue-spinner/src/SkewLoader.vue'
import VueCircle from 'vue2-circle-progress'


export default {
  name: 'Experience',
  props: [],
  components: {
    SkewLoader,
    VueCircle
  },
  computed: {
    ...mapState({
      token: state => state.accessToken
    }),
    fallDeteced: function () {
      return (Math.abs(this.beta) > 50 || this.test)
    }
  },
  data: function () {
    return {
      beta: 0,
      gamma: 0,
      progress: 50,
      test: false,
      cancel: false,
      calling: false
    }
  },
  watch: {
    fallDeteced: function (o, n) {
      // if(o){

      // }
    }
  },
  methods: {
    handleOrientation: function (event) {
      this.gamma = event.gamma
      this.beta = event.beta
    },
    call: function () {
      console.log('call')
      this.calling = true
      ajaxFetch().then(_ => {
        console.log('working')
      })
      // callBEA()
      // this.progress = 100
    },
    cancelCall: function () {
      // this.$router.push('/experience')
      location.reload()
      this.cancel = true
      console.log(this.cancel)
    },
    progress_end: function (event) {
      console.log('end')
      this.call()
    }
  },
  mounted () {
      const view = COBI.parameters.state()
      console.log(view)

      window.addEventListener('deviceorientation', this.handleOrientation)

  }
}

function ajaxFetch () {

    var data = JSON.stringify({
      'version': '3.0',
      'msisdn': '+4915771707061',
      'identifier': '8e4ebdabce5cdeb6a7d2eb14d47e6cc46fe754e29b23bba5b4cf2a80215ed104',
      'tenant_key': 'BSO16',
      'monitoringRequestFlag': false,
      'msd': {
        'geoPosition': {
          'accuracyLevel': 'low',
          'timeStamp': '2018-02-22T13:54:34.165Z',
          'latitude': 52.498301,
          'longitude': 13.375681,
          'accuracy': 1000,
          'direction': 0
        },
        'language': 'de_DE',
        'timeStamp': '2018-02-22T13:54:41.181Z',
        'control_type': 0,
        'trigger_type': 'auto',
        'event_type': 2,
        'call_handling': 'callback',
        'event_context_info': [
          'some-id-of-involved-user',
          'some-id-of-involved-user'
        ],
        'event_cause': 2,
        'test': true
      }
    });

    let myHeaders = new Headers()
    myHeaders.set('Accept', 'application/json; charset=utf-8n')
    myHeaders.set('Content-Type', 'application/json')

    myHeaders.set('bes-tenant-id', 'b1433144-8dc5-4067-a38e-7c95c74d8c95')
    myHeaders.set('content-type', 'application/json')
    myHeaders.set('authorization', 'BES-ACCESS-KEY x8IEh2zr3RBqySu5SpXfmEOfvidP28xfNs0apj0Rr0a0CSwFNtmp7vYIMol7xP11')
    // myHeaders.set('cache-control', 'no-cache')
    // myHeaders.set('postman-token', '7ec51337-4470-6950-a50d-1d99b3488a09')

    return fetch(
        'https://gate-stage-bea.s-apps.de1.bosch-iot-cloud.com/bes/v1/event',
        {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: data
        }
    ).then(res => res.json())

}

</script>

<style scoped>
  .right {
    /*width: 500px;
    float: right;*/
  }
  .left {
    /*width: 100px;
    float: left;*/
    position: absolute;
    left: 50px;
    top: 50px;
    transform: rotate(90deg);
    text-transform: uppercase;
    transform-origin: 0 0;
    opacity: 0.2;
  }
  .icon {
    width: 200px;
  }
  .label {
    float: left;
  }
  .loader {
    float: left;
    padding-right: 10px;
  }
  .circle {
    position: absolute;
    margin-left: -205px;
    /*top: 50%;
    left: 50%;
    transform: translate(-100px,-132px);*/
  }
  .fall {
    opacity: 1;
  }
</style>
