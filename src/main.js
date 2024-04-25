import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import { FontAwesomeIcon } from "./plugins/font-awesome";
import { FontAwesomeIcon } from "./plugins/font-awesome";
import setupInterceptors from "./services/setupInterceptors";
//vuetify
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
//
import ganttastic from "@infectoone/vue-ganttastic";
//

const vuetify = createVuetify({
  components,
  directives,
});

setupInterceptors(store);

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(ganttastic)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
