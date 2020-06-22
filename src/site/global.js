import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import qs from 'qs'

import LoadingAnimation from './components/LoadingAnimation'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.component('LoadingAnimation', LoadingAnimation)

Vue.prototype.$qs = qs
