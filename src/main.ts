import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from './config/routes'
import {Toast} from "vant";

const app = createApp(App);
app.use(Toast);

// Create the router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});


app.use(router);
app.mount('#app');
