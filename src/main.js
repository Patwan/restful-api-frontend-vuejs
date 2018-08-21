import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App'
import Quotes from './components/quotes.vue'
import NewQuote from './components/new-quote.vue'
import Signup from './components/signup.vue'
import Signin from './components/signin.vue'

//Bootstrap framework - Bootstrap version 4
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Font awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '' , component:Quotes },
  { path: '/new-quote' , component:NewQuote },
  { path: '/signup' , component: Signup },
  { path: '/signin' , component: Signin }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
