<script setup>
import { watch, ref, defineEmits } from "vue";

const search = ref("");

const emit = defineEmits(["search"]);

watch(search, (value) => {
  if (value.length >= 3) emit("search", value);
  if (value.length < 1) emit("search", value);
});
</script>

<template>
  <div class="relative mt-2">
    <input
      v-model="search"
      type="text"
      class="mt-6 py-1.5 grid w-full grid-cols-1 pl-3 pr-2 text-left text-gray-900 bg-white rounded-md cursor-default outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      placeholder="Поиск"
    />
  </div>
</template>
