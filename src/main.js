/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 09:56:44
 * @LastEditTime: 2021-04-13 17:25:27
 * @Description: main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { install } from '@icon-park/vue-next/es/all'

import 'reset.css';
import '@/styles/index.scss';

const app = createApp(App)
install(app)

app.use(router).use(store).mount('#app')

