import { createApp } from "vue";
import "@/styles/style.scss";
import App from "@/App.vue";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import { FaHome, RiGithubFill, OiRocket } from 'oh-vue-icons/icons'
import router from "./router";


const app = createApp(App);

addIcons(FaHome, RiGithubFill, OiRocket)

app.use(router)
app.component("v-icon", OhVueIcon);
app.mount("#app");
