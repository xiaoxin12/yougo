// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource';
import VueCookie from 'vue-cookie';

Vue.use(VueCookie);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.config.productionTip = false
// Tell Vue to use the plugin

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
