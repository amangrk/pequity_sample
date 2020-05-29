import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state: {
            beer: null
        },
        mutations: {
            selectBeer (state, beer) {
                state.beer = beer;
            },
        }
    }
)