import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// mdi
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// custom icon
import { custom } from "./iconsets/custom"

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      custom
    }
  }
})

createApp(App).use(vuetify).mount('#app')
