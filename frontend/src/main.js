import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueDragula from 'vuedraggable';


const app = createApp(App)

app.config.productionTip = false;
app.use(VueDragula);
app.mount('#app')
