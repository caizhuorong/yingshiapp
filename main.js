import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
 
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VueVideoPlayer)
const app = new Vue({
    ...App
})
app.$mount()
