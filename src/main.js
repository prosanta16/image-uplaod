// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase';

Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyBK-KXbflBiB-U76dL5K2iGGgZ3OzQYfWg",
    authDomain: "fir-image-upload-fb7ae.firebaseapp.com",
    projectId: "fir-image-upload-fb7ae",
    storageBucket: "fir-image-upload-fb7ae.appspot.com",
    messagingSenderId: "667903766821",
    appId: "1:667903766821:web:3797217dde4d686dff2acc",
    measurementId: "G-R9LN5KWWE1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
