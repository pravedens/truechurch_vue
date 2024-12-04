<template>
  <div>
    <div class="py-4 g-white sm:py-8">
      <div class="px-6 mx-auto max-w-7xl lg:px-8">
        <div class="max-w-2xl mx-auto lg:text-center">
          <p
            class="mt-2 text-4xl font-semibold tracking-tight text-center text-gray-900 text-pretty sm:text-5xl lg:text-balance"
          >
            Проповеди
          </p>
          <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
            <CategoryParson />

            <CategoryConference />

            <CategoryGroup />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoryParson from "./CategoryParson.vue";
import CategoryConference from "./CategoryConference.vue";
import CategoryGroup from "./CategoryGroup.vue";
</script>
