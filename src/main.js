import Vue from "vue";
import App from "./App.vue";
import TEST from "./views/TEST";
import router from "./router";
import store from "./store";
import LoginTest from "./components/LoginTest";
import Form from "./components/Form";
import Formname from "./components/Form-name";
import Formkuang from "./components/Form-kuang";
import Formyanzheng from "./components/Form-yanzheng";
import SignupOrdinary from "./components/SignupOrdinary";
import SignupCompany from "./components/SignupCompany";
import Formtest from "./components/Formtest";
import BackToTop from "./components/BackToTop";
import index from "./views/index";
import daohanglan from "./components/daohanglan";
import everyjob from "./components/tuijianzhiwei";
import zhiweixinxi from "./components/zhiweixinxi";
import fabugangwei from "./components/fabugangwei";

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/style.css";
import axios from "axios";
import VueAxios from "vue-axios";
import qs from "qs";

// 引入element-UI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.component("login", LoginTest);
Vue.component("TEST", TEST);
Vue.component("Form", Form);
Vue.component("Formname", Formname);
Vue.component("Formkuang", Formkuang);
Vue.component("Formyanzheng", Formyanzheng);
Vue.component("SignupOrdinary", SignupOrdinary);
Vue.component("SignupCompany", SignupCompany);
Vue.component("Formtest", Formtest);
Vue.component("BackToTop", BackToTop);
Vue.component("index", index);
Vue.component("daohanglan", daohanglan);
Vue.component("everyjob", everyjob);
Vue.component("zhiweixinxi", zhiweixinxi);
Vue.component("fabugangwei", fabugangwei);
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
