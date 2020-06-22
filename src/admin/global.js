import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import qs from 'qs'

import PageHead from './components/PageHead'
import PanelCard from './components/PanelCard'
import LoadingAnimation from './components/LoadingAnimation'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.component('PageHead', PageHead)
Vue.component('PanelCard', PanelCard)
Vue.component('LoadingAnimation', LoadingAnimation)

Vue.prototype.$qs = qs
