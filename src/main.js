// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './router'
import Home from './components/HelloFromVux'

Vue.use(VueRouter)
Vue.use(Vuex)

NProgress.configure({ showSpinner: false });

const router = new VueRouter({
    routes
})


// router.beforeEach((to, from, next) => {
//     //NProgress.start();
//     path: '/home'
// })


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
