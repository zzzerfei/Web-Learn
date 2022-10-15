import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import yhRequest from './service'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(globalRegister)
app.mount('#app')

yhRequest
  .request({
    url: '/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log(res)
  })
