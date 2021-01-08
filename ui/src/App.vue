<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './cover.css';

import Header from './components/Header.vue'
import Main from "./components/Main";
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>
