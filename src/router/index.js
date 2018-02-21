import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Welcome from '@/components/Welcome'
import Experience from '@/components/Experience'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:       '/',
            component:  Welcome
        },
        {
            path:       '/register',
            component:  Register
        },
        {
            path:       '/experience',
            component:  Experience
        }
    ]
})
