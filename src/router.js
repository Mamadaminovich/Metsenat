import {createRouter, createWebHashHistory} from 'vue-router';

import login from "./components/login.vue"
import dashboard from "./components/dashboard.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        { path: '/login', component: login, alias: '/' },
        { path: '/dashboard', component: dashboard },
      ]
});