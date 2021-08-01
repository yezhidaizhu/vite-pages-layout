import { createApp } from 'vue'
import 'vue-global-api'
import App from './App.vue'

// router
import router from "@/router/index"

import './tailwind.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
