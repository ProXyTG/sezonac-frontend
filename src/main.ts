import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/scss/main.scss'

// Vuetify
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
		  mdi,
		},
	  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
