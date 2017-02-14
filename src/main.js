// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI);
Vue.use(VueResource);

Vue.http.headers.common["Content-Type"] = 'application/x-www-form-urlencoded; charset=UTF-8';
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
