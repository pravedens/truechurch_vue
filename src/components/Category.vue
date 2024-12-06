<template>
  <!-- Спикеры -->
  <div class="relative flex flex-col items-start justify-between max-w-xl group">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="inline-flex items-center font-semibold text-gray-900 gap-x-1 text-sm/6"
      aria-expanded="false"
    >
      <span>Спикеры</span>
      <svg
        class="size-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          fill-rule="evenodd"
          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!--
                Flyout menu, show/hide based on flyout menu state.
            
                Entering: "transition ease-out duration-200"
                  From: "opacity-0 translate-y-1"
                  To: "opacity-100 translate-y-0"
                Leaving: "transition ease-in duration-150"
                  From: "opacity-100 translate-y-0"
                  To: "opacity-0 translate-y-1"
              -->
    <div
      v-if="isOpen"
      class="absolute z-10 max-w-xs px-4 mt-2 -translate-x-1/2 flexw-screen left-64"
    >
      <div
        class="flex-auto w-screen max-w-xs overflow-hidden bg-white shadow-lg rounded-3xl text-sm/6 ring-1 ring-gray-900/5"
      >
        <div
          :class="{ 'bg-slate-300': isActive == index }"
          v-for="(item, index) in categories"
          :key="index"
          class="p-3 hover:bg-slate-300"
        >
          <a class="cursor-pointer" @click="filter(item.id, index)"
            ><div class="flex items-center gap-x-6">
              <img class="rounded-full size-8" :src="item.thumbnail" alt="" />
              <div>
                <h3
                  class="font-semibold tracking-tight text-gray-900 text-base/7"
                >
                  {{ item.title }}
                </h3>
              </div>
              <svg
                v-if="isActive == index"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="text-green-600 size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg></div
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- Спикеры -->
</template>

<script setup>
import { onMounted, ref, defineEmits } from "vue";
import axios from "axios";

const emit = defineEmits(["filterPost"]);

const isOpen = ref(false);

const categories = ref([]);

const isActive = ref("");

onMounted(() => {
  isActive.value = null;
  axios
    .get("categories")
    .then((resp) => (categories.value = resp.data.data.data))
    .catch((err) => console.log(err));
});

const filter = (id, index) => {
  isActive.value = index;
  emit("filterPost", id);
};
</script>
