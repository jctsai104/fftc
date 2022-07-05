<template>
  <div id="app">
    <NavHeader />
    <FooterBottom />
  </div>
</template>

<script>
import NavHeader from './components/navHeader.vue'
import FooterBottom from './components/footerBottom.vue'

export default {
  name: 'navHeader',
  components: {
    NavHeader,
    FooterBottom
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200;300;400;500;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
#app {
  font-family: 'Noto Serif TC';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding-top: 30px;
}

nav a {
  font-weight: 500;
  color: #606266;
  letter-spacing: 2%;
}

h1{
  color: #ffffff;
  background-color: #ccc;
  padding: 2rem;
  margin: 2rem 0;
  letter-spacing: 2%;
  font-size: 5rem;
}

h2 {
  font-weight: bold;
}
</style>
