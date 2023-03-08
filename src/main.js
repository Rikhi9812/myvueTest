import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './assests/style.css'

const app = createApp(App)


app.use(createPinia())
app.mount('#app')
