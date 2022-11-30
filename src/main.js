import { createApp } from 'vue'

import pinia from './stores'
import App from './App.vue'
import router from './router'

import './assets/css/index.css'
import 'normalize.css'

createApp(App).use(router).use(pinia).mount('#app')
