import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import 'primevue/resources/themes/saga-blue/theme.css'; // PrimeVue theme
import 'primevue/resources/primevue.min.css'; // PrimeVue core styles
import 'primeicons/primeicons.css'; // PrimeVue icons
import 'primeflex/primeflex.css'; // PrimeFlex utility classes


// Create and configure the app
const app = createApp(App);

// Use PrimeVue
app.use(PrimeVue);

// Register PrimeVue components and directives globally
app.component('Button', Button);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);

// Mount the app to the DOM
app.mount('#app');
