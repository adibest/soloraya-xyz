import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import qs from 'qs'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.prototype.$qs = qs
