import './assets/main.css'
import router from '@/router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
.use(router)
.mount('#app')
