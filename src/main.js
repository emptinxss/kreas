import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//import boostrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

//import fontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faCartShopping,
  faArrowLeftLong,
  faTrashCan,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faMagnifyingGlass,
  faCartShopping,
  faArrowLeftLong,
  faTrashCan,
  faPlus,
  faMinus
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
