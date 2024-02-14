<template>
  <NavBar/>
  <InfoPage/>
  <NavigateToContact/>
  <Footer class="Footer"/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import InfoPage from './components/InfoPage.vue'
import NavigateToContact from './components/NavigateToContact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    InfoPage,
    NavBar,
    NavigateToContact,
    Footer
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the app container is at least as tall as the viewport */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.NavBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100; /* Ensure it stays above other content */
}

/* Push the content down by the height of the NavBar if it's fixed */
.content {
  margin-top: 60px; /* Height of your NavBar */
  flex-grow: 1; /* Ensures it takes up all available space */
}

.Footer {
  margin-top: auto; /* This will push the footer to the bottom */
}

html, body {
  height: 100%; /* Full height for the root elements */
  margin: 0;
  padding: 0;
}
</style>


