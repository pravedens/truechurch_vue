import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from '../axios.js'
import vSelect from 'vs-vue3-select'
import 'vs-vue3-select/dist/vs-vue3-select.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
