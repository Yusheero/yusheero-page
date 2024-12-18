import { createApp } from 'vue';
import './assets/styles/style.scss';
import App from './App.vue';
import { router } from './router/router';

createApp(App).use(router).mount('#app')
