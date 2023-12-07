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

//Appolo
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'


const httpLink = createHttpLink({
  uri: 'https://blue-surf-1230260.us-east-1.aws.cloud.dgraph.io/graphql',
})
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

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
app.use(apolloProvider)

app.mount('#app')
