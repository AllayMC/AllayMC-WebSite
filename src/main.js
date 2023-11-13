import { createApp } from 'vue';
import './assets/css/common.scss';//公共scss
import 'animate.css';//动画css
import 'typicons.font';//图标文件
import './utils/rem';
import i18n from './lang/lang';//导入多语言
import App from './App.vue';
import router from './router/index';//导入路由
import pinia from './stores/index';//导入pinia

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(router)

app.mount('#app')