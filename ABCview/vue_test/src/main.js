import Vue from 'vue'
import App from './App.vue'
import {Button, Slider} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.component(Button.name, Button);
Vue.component(Slider.name, Slider);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
