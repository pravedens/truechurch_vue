<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { userAuthStore } from '../../stores/authStore';
import { useRouter } from 'vue-router';

const authStore = userAuthStore();

const router = useRouter();

const form = ref({
    email: '',
    password: ''
});

const submit = () => {
    axios.post('login', form.value)
        .then(resp => {
            authStore.saveToken(resp.data.data.access_token);
            authStore.user = resp.data.data.user;
            console.log(resp.data.data.access_token);
            router.push('/');
        })
        .catch(err => console.log(err))
}

</script>

<template>
    <!--
  This example requires updating your template:

  ```
  <html class="h-full bg-white">
  <body class="h-full">
  ```
-->
<div class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="w-auto h-10 mx-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2 class="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9">Войдите в свою учетную запись</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="submit">
        <div>
          <label for="email" class="block font-medium text-gray-900 text-sm/6">Email</label>
          <div class="mt-2">
            <input v-model="form.email" type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block font-medium text-gray-900 text-sm/6">Пароль</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Забыли пароль?</a>
            </div>
          </div>
          <div class="mt-2">
            <input v-model="form.password" type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Войти</button>
        </div>
      </form>
    </div>
  </div>
  
</template>
