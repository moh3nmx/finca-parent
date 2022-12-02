import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import global from './global'

if (!Vue.__utils__) {
  Vue.__utils__ = true
  Vue.mixin({
    mixins: [global], // utils.js codes
  })
}
