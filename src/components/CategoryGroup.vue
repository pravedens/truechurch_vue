<template>
    <div class="sm:col-span-2">
      <label for="group" class="block font-medium text-gray-900 text-sm/6"
        >Год</label
      >
      <div class="grid grid-cols-1 mt-2">
        <select
          id="group"
          name="group"
          autocomplete="group-name"
          class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        >
          <option>Выберите год</option>
          <option v-for="(item, index) in groups" :key="index">
            {{ item.title }}
          </option>
        </select>
        <svg
          class="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fill-rule="evenodd"
            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import axios from "axios";
  
  const groups = ref([]);
  
  onMounted(() => {
    axios
      .get("groups")
      .then((resp) => (groups.value = resp.data.data.data))
      .catch((err) => console.log(err));
  });
  </script>
  