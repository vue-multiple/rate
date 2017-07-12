import Vue from 'vue'
import App from './App.vue'

// import 'highlight.js/styles/monokai-sublime.css'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

import Rate from '../../src/index.js'
Vue.component(Rate.name, Rate)

new Vue({
    el: '#app',
    render: h => h(App)
})
