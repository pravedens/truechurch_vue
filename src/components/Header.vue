<template>
  <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <input
      v-model="search"
      type="text"
      class="p-1 mt-1 bg-blue-300 border-2 border-gray-300 rounded-lg placeholder-slate-600"
      placeholder="Поиск"
    />
  </div>
</template>

<script setup>
import { watch, ref, defineEmits } from "vue";

const search = ref("");

const emit = defineEmits(["search"]);

watch(search, (value) => {
  if (value.length >= 3) emit("search", value);
  if (value.length < 1) emit("search", value);
});
</script>
