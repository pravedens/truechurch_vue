import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const userAuthStore = defineStore('authStore', () => {
    const user = ref({})
    const token = ref('');

    const saveToken = (newToken) => {
        token.value = newToken;
    }

    const getUser = () => {
        axios.get('user')
            .then(resp => {
                user.value = resp.data.data.data;
            })
            .catch(err => console.log(err))
    }

    const isLoggin = computed(() => Boolean(token.value));

    function changeUser (name) {
        user.value = name;
    }
  
    return { user, isLoggin, changeUser, saveToken, getUser, token }
  })