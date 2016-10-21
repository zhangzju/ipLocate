import Vue from 'vue'
import App from './components/App.vue'
import Index from './components/Index.vue'
import Weather from './components/Weather.vue'
import News from './components/News.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/index', name: "index", component: Index },
    { path: '/weather', name: "weather", component: Weather },
    { path: '/news', name: "news", component: News },
    { path: '*', redirect: '/index' }
  ]
})

/* eslint-disable no-new */
// const app = new Vue({
//   router
// }).$mount('#app')
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
})
