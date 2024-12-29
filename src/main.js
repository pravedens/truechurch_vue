import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import axios from "../axios.js";
import { createPinia } from "pinia";
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

createApp(App).use(VuePlyr, {
  plyr: {},
})

.use(createPinia()).use(router).mount("#app");
