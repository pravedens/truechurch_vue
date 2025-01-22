<template>
  <div>
    <h1>Проповеди</h1>
    <div>
      <label>Спикер:</label>
      <select v-model="filters.category" @change="isFilter">
        <option
          v-for="(item, index) in categories"
          :key="index"
          :value="item.id"
        >
          {{ item.title }}
        </option>
      </select>

      <label>Мероприятия:</label>
      <select v-model="filters.conference" @change="isFilter">
        <option
          v-for="(item, index) in conferences"
          :key="index"
          :value="item.id"
        >
          {{ item.title }}
        </option>
      </select>

      <label>Год:</label>
      <select v-model="filters.group" @change="isFilter">
        <option v-for="(item, index) in groups" :key="index" :value="item.id">
          {{ item.title }}
        </option>
      </select>

      <div v-if="loading">Loading...</div>
      <ul v-else>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
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
    await axios
    .get("posts")
    //.then(resp => console.log(resp))
    .then((resp) => (posts.value = resp.data.data.data))
    .catch((err) => console.log(err));
});

const filters = ref({
  category: "",
  conference: "",
  group: "",
});

const loading = ref(false);

const isFilter = async () => {
  loading.value = true;
  try {
    // Construct query parameters based on filters
    const params = {};
    if (filters.value.category) params.category = filters.value.category;
    if (filters.value.conference) params.conference = filters.value.conference;
    if (filters.value.group) params.group = filters.value.group;

    // Perform GET request with query parameters
    const response = await axios.get("posts", { params });
    posts.value = response.data.data.data;
  } catch (error) {
    console.error("Error fetching foods:", error);
  } finally {
    loading.value = false;
  }
};
</script>
