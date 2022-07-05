<template>
  <nav>
    <div class="flex items-center">
      <div class="mr-10">
        <router-link to="/" class="mx-4 flex items-center">
          <img src="../assets/fftc_logo.png" alt="FFTC logo" width="50px">
          <div class="mx-2 text-left">
            <h2 class="text-sm">Food and Fertilizer Technology Center</h2>
            <h3 class="text-xs">for the Asian and Pacific Region</h3>
          </div>
        </router-link>
      </div>
      <div class="justify-between">
        <router-link to="/about" class="mx-2 activeColor">ABOUT</router-link>
        <router-link to="/news" class="mx-2 activeColor">NEWS</router-link>
        <router-link to="/workshop" class="mx-2 activeColor">WORKSHOP</router-link>
        <router-link to="/project" class="mx-2 activeColor">PROJECT</router-link>
        <router-link to="/publications" class="mx-2 activeColor">PUBLICATIONS</router-link>
        <router-link to="/contact" class="mx-2 activeColor">CONTACT</router-link>
        <router-link to="/links" class="mx-2 activeColor">LINKS</router-link>

      </div>
    </div>
    <router-view/>
  </nav>
</template>

<script>

export default {
  name: 'navHeader'

}
</script>

<style scoped>
nav a.router-link-exact-active {
  color: #F59E0B;
  font-weight: 800;
}
</style>
