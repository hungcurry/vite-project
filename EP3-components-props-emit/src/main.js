import { createApp } from 'vue'
import App from './App.vue'
import Global from './components/Global.vue'
import VImg from './components/VImg.vue'

// import './assets/main.css'


// Global components
const app= createApp(App)
app.component("Global" , Global)
app.component("VImg" , VImg)
app.mount('#app')
