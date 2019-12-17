import Vue from 'vue'
import App from './app.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@src/router'
import '@src/styles/index.less'
import store from '@src/store'

Vue.use(ElementUI)

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
