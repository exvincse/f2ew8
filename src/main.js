import 'bootstrap';
import loading from 'vue-loading-overlay';
import firebase from 'firebase/app';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'firebase/database';
import 'firebase/storage';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './bus';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyCtwB6i-4opXJRlXoyUF4NFL9dLWiMnEQ8',
  authDomain: 'clouddrive-2dfed.firebaseapp.com',
  databaseURL: 'https://clouddrive-2dfed.firebaseio.com',
  projectId: 'clouddrive-2dfed',
  storageBucket: 'clouddrive-2dfed.appspot.com',
  messagingSenderId: '615450520838',
  appId: '1:615450520838:web:0d0fb882607cead0',
};
firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;

Vue.component('Loading', loading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
