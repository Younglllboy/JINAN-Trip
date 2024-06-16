<template>
  <div id="app">
    <Title />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Title from './components/TitleOn.vue';
import Navbar from './components/NavbarOn.vue';
import Footer from './components/FooterOn.vue';

export default {
  name: 'App',
  components: {
    Title,
    Navbar,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
