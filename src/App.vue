<template>
  <div class="min-h-full">
    <!-- Navbar -->
    <Navbar />
    <!-- End Navbar -->

    <!-- Header -->
    <Header @search="handleSearch"/>
    <!-- End Header -->
     
    <main>

      <!-- ListPost -->
      <RouterView />
      <!-- End ListPost -->
    </main>

    <!-- Footer -->
    <Footer />
    <!-- End Footer -->
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";

import { provide, ref } from 'vue';

const emitData = ref('');

const handleSearch = (data) => {
  emitData.value = data;
}

provide('headerSearch', emitData);
</script>
