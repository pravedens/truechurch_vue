<template>
    <div>
        <Category />

        <ListPosts :dataPost="posts"/>

    </div>
</template>

<script setup>
import Category from '../components/Category.vue';
import ListPosts from './ListPosts.vue';

import { onMounted, ref } from "vue";
  import axios from "axios";
  
  const posts = ref([]);
  
  onMounted(() => {
    axios
      .get("posts")
      //.then(resp => console.log(resp))
      .then((resp) => (posts.value = resp.data.data.data))
      .catch((err) => console.log(err));
  });
</script>