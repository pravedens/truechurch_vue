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
            <div class="sm:col-span-2">
              <label
                for="country"
                class="block font-medium text-gray-900 text-sm/6"
                >Country</label
              >
              <div class="grid grid-cols-1 mt-2">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option v-for="(item, index) in categories" :key="index">
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

            <div class="sm:col-span-2">
              <label
                for="country"
                class="block font-medium text-gray-900 text-sm/6"
                >Country</label
              >
              <div class="grid grid-cols-1 mt-2">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>United States</option>
                  <option>United States</option>
                  <option>Mexico</option>
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

            <div class="sm:col-span-2">
              <label
                for="country"
                class="block font-medium text-gray-900 text-sm/6"
                >Country</label
              >
              <div class="grid grid-cols-1 mt-2">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const categories = ref([]);

onMounted(() => {
  axios
    .get("categories")
    .then((resp) => (categories.value = resp.data.data.data))
    .catch((err) => console.log(err));
});
</script>
