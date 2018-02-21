import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'

Vue.config.productionTip = false

COBI.init('token — can be anything right now')

/* eslint-disable */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
