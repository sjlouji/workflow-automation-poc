import './assets/main.css';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.use(ElementPlus);
app.config.productionTip = false;
app.mount('#app')
