<script setup>
import { onMounted, ref, defineEmits, onUnmounted } from "vue";
import axios from "axios";

const emit = defineEmits(["filterPost"]);

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

const categoryDropdown = ref(false);

const dropdownCategory = (event) => {
  event.stopPropagation();
  categoryDropdown.value = !categoryDropdown.value;
};

const categoryClickDropdown = () => {
  if (categoryDropdown.value) categoryDropdown.value = false;
};

onMounted(() => {
  document.addEventListener("click", categoryClickDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", categoryClickDropdown);
});
</script>

<template>
  <div>
    <label id="listbox-label" class="block font-medium text-gray-900 text-sm/6"
      >Спикеры</label
    >
    
    <div class="relative mt-2">
      <button
        @click="dropdownCategory"
        type="button"
        class="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
      >
        <span
          class="flex items-center col-start-1 row-start-1 gap-3 pr-6"
        >
          <span class="block truncate">Выбери спикера</span>
        </span>
        <svg
          class="self-center col-start-1 row-start-1 text-gray-500 size-5 justify-self-end sm:size-4"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!--
        Select popover, show/hide based on select state.
  
        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <ul
        v-show="categoryDropdown"
        class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black/5 focus:outline-none sm:text-sm"
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
  
          Highlighted: "bg-indigo-600 text-white outline-none", Not Highlighted: "text-gray-900"
        -->
        <li
          :class="{ 'bg-slate-300': isActive == index }"
          v-for="(item, index) in categories"
          :key="index"
          class="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
          id="listbox-option-0"
          role="option"
        >
          <div @click="filter(item.id, index)" class="flex items-center">
            <img
              :src="item.thumbnail"
              alt=""
              class="rounded-full size-5 shrink-0"
            />
            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
            <span class="block ml-3 font-normal truncate">{{
              item.title
            }}</span>
          </div>

          <!--
            Checkmark, only display for selected option.
  
            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          -->
          <span
            class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
          >
            <svg
              v-if="isActive == index"
              class="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>

        <!-- More items... -->
      </ul>
    </div>
  </div>
</template>