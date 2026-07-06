import { createApp } from 'vue';
import App from './components/App/App.vue';
import router from './router/index.js';

createApp(App).use(router).mount('#root');
