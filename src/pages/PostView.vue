<template>
  <div>
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <p
        class="mt-2 text-4xl font-semibold tracking-tight text-center text-gray-900 text-pretty sm:text-5xl lg:text-balance"
      >
        Проповеди
      </p>

      <div
        class="grid max-w-2xl grid-cols-2 pt-6 mx-auto mt-4 gap-x-4 gap-y-8 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <!--<div class="py-4 g-white sm:py-8">-->
        <!--<div class="px-6 mx-auto max-w-7xl lg:px-8">-->
        <!--<div class="max-w-2xl mx-auto lg:text-center">-->

        <Category @filterPost="isFilter" />
        <Conference @filterPost="conferenceFilter" />
        <Group @filterPost="groupFilter" />
        <SearchPost @search="handleSearch" />
        <!--</div>-->
        <!--</div>-->
      </div>
      <!--</div>-->
    </div>
    <ListPosts :dataPost="posts" :funcGetDataPost=getDataPost />
  </div>
</template>

<script setup>
import Category from "../components/Category.vue";
import ListPosts from "./ListPosts.vue";
import Conference from "../components/Conference.vue";
import Group from "../components/Group.vue";
import SearchPost from '../components/SearchPost.vue'
import { onMounted, ref } from "vue";
import axios from "axios";

const posts = ref([]);
const idCategory = ref(null);
const idConference = ref(null);
const idGroup = ref(null);

onMounted( () => {
  getDataPost();
});

const getDataPost = async (number = null) => {
  let url = number ? 'posts?page='+number : 'posts';
  if(idCategory.value) url = url+'&category='+idCategory.value;
  if(idConference.value) url = url+'&conference='+idConference.value;
  if(idGroup.value) url = url+'&group='+idGroup.value;
  await axios
    .get(url)
    //.then(resp => console.log(resp))
    .then(resp => posts.value = resp.data.data)
    .catch(err => console.log(err));
}

const isFilter = async (id) => {
  idCategory.value = id;
  await axios
    .get("posts?category=" + id)
    //.then(resp => console.log(resp))
    .then((resp) => (posts.value = resp.data.data))
    .catch((err) => console.log(err));
};

const conferenceFilter = async (id) => {
  idConference.value = id;
  await axios
    .get("posts?conference=" + id)
    //.then(resp => console.log(resp))
    .then((resp) => (posts.value = resp.data.data))
    .catch((err) => console.log(err));
};

const groupFilter = async (id) => {
  idGroup.value = id;
  await axios
    .get("posts?group=" + id)
    //.then(resp => console.log(resp))
    .then((resp) => (posts.value = resp.data.data))
    .catch((err) => console.log(err));
};

const handleSearch = async (value) => {
  await axios
    .get("posts?search=" + value)
    //.then(resp => console.log(resp))
    .then((resp) => (posts.value = resp.data.data))
    .catch((err) => console.log(err));
};
</script>
