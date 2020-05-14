import Vue from "vue";
import App from "./App.vue";

import VueToast from "vue-toast-notification";
import VModal from "vue-js-modal";
import VueCookie from "vue-cookie";

Vue.use(VueToast);
Vue.use(VueCookie);
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
