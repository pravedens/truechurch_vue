<script setup>
import ListPosts from "./ListPosts.vue";
import SearchPost from "../components/SearchPost.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const posts = ref([]);
const categories = ref([]);
const conferences = ref([]);
const groups = ref([]);

onMounted(async () => {
  await axios
    .get("categories")
    //.then(resp => console.log(resp))
    .then((resp) => (categories.value = resp.data.data.data))
    .catch((err) => console.log(err));
  await axios
    .get("conferences")
    //.then(resp => console.log(resp))
    .then((resp) => (conferences.value = resp.data.data.data))
    .catch((err) => console.log(err));
  await axios
    .get("groups")
    //.then(resp => console.log(resp))
    .then((resp) => (groups.value = resp.data.data.data))
    .catch((err) => console.log(err));
});

const handleSearch = async (value) => {
  await axios
    .get("posts?search=" + value)
    //.then(resp => console.log(resp))
    .then((resp) => (posts.value = resp.data.data))
    .catch((err) => console.log(err));
};

const filters = ref({
  category: "",
  conference: "",
  group: "",
});

const loading = ref(false);

const applyFilter = async (number = null) => {
  loading.value = true;
  try {
    // Construct query parameters based on filters
    const params = {};
    let url = number ? "posts?page=" + number : "posts";

    if (filters.value.category) params.category = filters.value.category;
    if (filters.value.conference) params.conference = filters.value.conference;
    if (filters.value.group) params.group = filters.value.group;

    // Perform GET request with query parameters
    const response = await axios.get(url, { params });
    console.log(params);
    posts.value = response.data.data;
  } catch (error) {
    console.error("Error fetching foods:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <p
        class="mt-2 text-4xl font-semibold tracking-tight text-center text-gray-900 text-pretty sm:text-5xl lg:text-balance"
      >
        Проповеди
      </p>
      <form>
        <div class="space-y-12">
          <div class="pb-12 border-b border-gray-900/10">
            <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-full">
                <label
                  for="street-address"
                  class="block font-medium text-gray-900 text-sm/6"
                  >Поиск</label
                >
                <div class="mt-2">
                  <SearchPost @search="handleSearch" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="region"
                  class="block font-medium text-gray-900 text-sm/6"
                  >State / Province</label
                >
                <div class="mt-2">
                  <select
                    type="text"
                    name="region"
                    id="region"
                    autocomplete="address-level1"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    v-model="filters.category"
                    @change="applyFilter"
                  >
                    <option
                      v-for="(item, index) in categories"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.title }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="region"
                  class="block font-medium text-gray-900 text-sm/6"
                  >State / Province</label
                >
                <div class="mt-2">
                  <select
                    type="text"
                    name="region"
                    id="region"
                    autocomplete="address-level1"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    v-model="filters.conference"
                    @change="applyFilter"
                  >
                    <option
                      v-for="(item, index) in conferences"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.title }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="region"
                  class="block font-medium text-gray-900 text-sm/6"
                  >State / Province</label
                >
                <div class="mt-2">
                  <select
                    type="text"
                    name="region"
                    id="region"
                    autocomplete="address-level1"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    v-model="filters.group"
                    @change="applyFilter"
                  >
                    <option
                      v-for="(item, index) in groups"
                      :key="index"
                      :value="item.id"
                    >
                      {{ item.title }}
                    </option>
                  </select>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </form>
      <!--</div>-->
      <ListPosts :dataPost="posts" :funcGetDataPost="applyFilter" />
    </div>
  </div>
</template>
