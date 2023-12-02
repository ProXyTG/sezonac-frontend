import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/scss/main.scss'

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// make sure to also import the coresponding css
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css";

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

app.use(router)
app.use(vuetify)

app.mount('#app')
