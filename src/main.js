/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 09:56:44
 * @LastEditTime: 2021-04-13 13:38:49
 * @Description: main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import 'reset.css';
import '@/styles/index.scss';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
