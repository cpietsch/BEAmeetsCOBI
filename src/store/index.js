import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 768063617

const state = {
    accessToken: ''
}


const mutations = {

    accessToken (state, id) {
        state.accessToken = id
    }
}


const actions = {

    clearState: ({ commit }) => commit('clearState')

}


const getters = {

    getLatestUser (state) {
        return state.latestUsers
    }

}


// function ajaxFetch (config) {

//     let myHeaders = new Headers()
//     myHeaders.set('Accept', 'application/json; charset=utf-8n')
//     myHeaders.set('Content-Type', 'application/json')

//     // TODO dev CORS
//     // looks like the api is now working with cors
//     return fetch(
//         '' + config.url,
//         {
//             method: 'POST',
//             headers: myHeaders,
//             mode: 'cors',
//             cache: 'default',
//             body: JSON.stringify(config.body)
//         }
//     ).then(res => res.json())

// }



export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
