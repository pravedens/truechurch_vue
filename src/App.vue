<template>
  <div class="min-h-full">
    <!-- Navbar -->
    <Navbar />
    <!-- End Navbar -->

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
import Header from "./components/SearchPost.vue";
import { RouterView } from "vue-router";

</script>
