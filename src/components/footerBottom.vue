<template>
  <nav>
    <div class="flex items-end bg-gray-900">
      <!-- logo -->
      <div class="m-8">
        <router-link to="/" class="mx-4 flex flex-col items-start">
          <img src="../assets/fftc_logo.png" alt="FFTC logo" width="50px" class="mb-3">
          <div class="mx-2 text-left">
            <h2 class="text-sm">Food and Fertilizer Technology Center</h2>
            <h3 class="text-xs">for the Asian and Pacific Region</h3>
          </div>
        </router-link>
      </div>
      <!-- info -->
      <div class="m-8 text-left">
        <div class="flex flex-col justify-between">
          <h5 class="m-2">電話 : +886-2-2362-6239</h5>
          <h5 class="m-2">傳真 : +886-2-2362-0478</h5>
          <h5 class="m-2">Email : info@fftc.org.tw</h5>
          <h5 class="m-2">106018 台北市大安區溫州街14號5樓</h5>
        </div>
      </div>
      <!-- menu -->
      <div class="flex justify-between">
        <div class="text-left flex flex-col justify-between m-8">
          <router-link to="/about" class="m-2 text-white">ABOUT</router-link>
          <router-link to="/news" class="m-2 text-white">NEWS</router-link>
          <router-link to="/workshop" class="m-2 text-white">WORKSHOP</router-link>
          <router-link to="/project" class="m-2 text-white">PROJECT</router-link>
        </div>
        <div class="text-left flex flex-col justify-between m-8">
          <router-link to="/publications" class="m-2 text-white">PUBLICATIONS</router-link>
          <router-link to="/contact" class="m-2 text-white">CONTACT</router-link>
          <router-link to="/links" class="m-2 text-white">LINKS</router-link>
        </div>
      </div>
      <!-- lang&privite -->
      <div class="text-left m-8">
        <div class="text-left mb-8">
          <select class="px-5 py-1 rounded-sm">
            <option value="1">繁體中文</option>
            <option value="0">English</option>
          </select>
        </div>
        <div class="text-left">
          <div class="flex my-2">
            <a href="#" class="text-xs mr-2">隱私權保護政策</a>
            <a href="#" class="text-xs">版權聲明</a>
          </div>
          <p class="text-xs text-gray-400">
            Copyright © FFTC 亞洲太平洋地區糧食與肥料技術中心
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'footerBottom'

}
</script>

<style scoped>
h5 {
  color: #969696;
  font-size: 15px;
  font-family: 'Noto Sans TC';
}
</style>
