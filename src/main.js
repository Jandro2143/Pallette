import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

// Import PrimeVue styles
import 'primevue/resources/themes/saga-blue/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons

const app = createApp(App);

// Use PrimeVue
app.use(PrimeVue);

// Optionally, you can add PrimeVue components globally
import Button from 'primevue/button';
app.component('Button', Button);

app.mount('#app');
