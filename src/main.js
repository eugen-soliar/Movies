import { createApp } from 'vue';
import App from './components/App/App.vue';
import router from './router/index.js';
import 'modern-normalize/modern-normalize.css';
import './index.css';

createApp(App).use(router).mount('#root');
