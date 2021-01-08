<template>
  <Header msg="Bagian Header"/>
  <Content msg="Bagian Content"/>
  <Footer msg="Bagian Footer"/>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
  }
}
</script>

<style>
</style>
