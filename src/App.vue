<template>
  <div class="min-h-full">
    <!-- Navbar -->
    <Navbar />
    <!-- End Navbar -->

    <!-- Header -->
    <Header />
    <!-- End Header -->
    <main>
      <!-- Фильтр проповедей -->
      <Category />
      <!-- Конец фильтра проповедей -->

      <!-- ListPost -->
      <ListPosts />
      <!-- End ListPost -->
    </main>

    <!-- Footer -->
    <Footer />
    <!-- End Footer -->
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Category from "./components/Category.vue";
import Footer from "./components/Footer.vue";
import ListPosts from "./pages/ListPosts.vue";
import Header from "./components/Header.vue";
</script>
