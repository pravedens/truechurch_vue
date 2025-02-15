import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const userAuthStore = defineStore('authStore', () => {
    const user = ref({})
    const token = ref(sessionStorage.getItem('token') ?? null);
    const cardPost = ref(null);

    const saveToken = (newToken) => {
        token.value = newToken;
        sessionStorage.setItem('token', newToken);
    }

    const clearToken = () => {
        token.value = null;
        user.value = null;
        sessionStorage.clear();
    }

    const getUser = () => {
        axios.get('user')
            .then(resp => {
                user.value = resp.data.data;
            })
            .catch(err => console.log(err))
    }

    const isLoggin = computed(() => Boolean(token.value));

    function changeUser (name) {
        user.value = name;
    }

    const addCard = () => {
        cardPost.value ++;
    }
  
    return { user, isLoggin, changeUser, saveToken, getUser, token, clearToken, cardPost, addCard }
  })