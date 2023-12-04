//Main
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

//Css
import '@/assets/scss/main.scss'

//MaterialDesign
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css";

//Store
import { store } from './store'

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
	theme: {
	  defaultTheme: "light",
	},
	icons: {
	  defaultSet: "mdi",
	},
	components,
	directives,
  });

const app = createApp(App)

app.use(store)
app.use(router)
app.use(vuetify)

app.mount('#app')
