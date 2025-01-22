<script setup>
import { ref } from "vue";
import Pagination from "../components/Pagination.vue";

const props = defineProps({
  dataPost: Object,
  funcGetDataPost: Function,
});

const isVisible = ref(false);
const dataModal = ref("");

const showModal = (post) => {
  isVisible.value = true;
  dataModal.value = post;
};

const close = () => {
  isVisible.value = false;
};
</script>

<template>
  <div>
    <div class="bg-white">
      <div
        class="max-w-2xl px-4 py-4 mx-auto sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8"
      >
        <div
          v-if="dataPost.data?.length > 0"
          class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <div
            @click="showModal(post)"
            v-for="(post, index) in dataPost.data"
            :key="index"
          >
            <a
              href="#"
              class="flex flex-col overflow-hidden transition bg-white border shadow-sm group rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
              <div
                class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden"
              >
                <img
                  class="absolute top-0 object-cover transition-transform duration-500 ease-in-out size-full start-0 group-hover:scale-105 group-focus:scale-105 rounded-t-xl"
                  :src="post.thumbnail"
                  alt="Card Image"
                />
                <div
                  class="absolute top-0 shadow-lg opacity-50 bg-fuchsia-700 shadow-blue-500/50 start-0 end-0 rounded-xl"
                >
                  <div class="p-1 md:p-1">
                    <h3 class="text-lg text-center text-white">
                      {{ post.title }}
                    </h3>
                  </div>
                </div>
              </div>
              <p
                class="rounded-full px-3 py-1.5 text-lg font-medium text-fuchsia-700"
              >
                {{ post.category.title }}
              </p>
            </a>
            <div
              class="flex items-center justify-between px-2 py-1 border-b rounded-t-xl md:px-3 dark:border-neutral-700"
            >
              <div class="p-2 sm:px-2">
                <p class="font-mono text-sm text-gray-500 dark:text-neutral-500">
                  {{ post.created_at }}
                </p>
              </div>
            </div>
          </div>

          <!-- More products... -->
        </div>
        <div
          v-else
          class="flex flex-col bg-white border shadow-sm min-h-60 rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        >
          <div
            class="flex flex-col items-center justify-center flex-auto p-4 md:p-5"
          >
            <svg
              class="text-gray-500 size-10 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" x2="2" y1="12" y2="12"></line>
              <path
                d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
              ></path>
              <line x1="6" x2="6.01" y1="16" y2="16"></line>
              <line x1="10" x2="10.01" y1="16" y2="16"></line>
            </svg>
            <p class="mt-2 text-sm text-gray-800 dark:text-neutral-300">
              Данные отсутствуют
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Pagination
        v-if="dataPost.links?.length > 3"
        :data="dataPost"
        :functPost="funcGetDataPost"
      />
    </div>

    <!-- Modal -->
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      v-if="isVisible"
      @click.self="close"
    >
      <!--
        Background backdrop, show/hide based on modal state.
    
        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div
        class="fixed inset-0 transition-opacity bg-gray-500/75"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0"
        >
          <!--
            Modal panel, show/hide based on modal state.
    
            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
          <div
            class="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-12 sm:w-full sm:max-w-7xl"
          >
            <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                  <ul
                    role="list"
                    class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                  >
                    <li>
                      <div class="flex items-center gap-x-6">
                        <img
                          class="rounded-full size-16"
                          :src="dataModal.thumbnail"
                          alt=""
                        />
                      </div>
                    </li>

                    <!-- More people... -->
                  </ul>
                  <h2
                    class="text-xl font-semibold text-gray-900"
                    id="modal-title"
                  >
                    {{ dataModal.title }}
                  </h2>
                  <div class="p-8 mt-2">
                    <p
                      class="text-lg text-gray-500"
                      v-html="dataModal.description"
                    ></p>
                    <p
                      class="text-lg text-gray-500"
                      v-html="dataModal.content"
                    ></p>
                  </div>

                  <div class="py-8 bg-white sm:py-12">
                    <div class="px-6 mx-auto max-w-7xl lg:px-8">
                      <h2
                        class="font-semibold text-center text-gray-900 text-lg/8"
                      >
                        Смотрим:
                      </h2>
                      <div
                        class="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
                      >
                        <a :href="dataModal.youtube"
                          ><img
                            class="object-contain w-full col-span-2 max-h-12 lg:col-span-1 hover:rotate-45"
                            src="../assets/img/template/Youtube_red.png"
                            alt="Transistor"
                            width="158"
                            height="48"
                        /></a>
                        <a :href="dataModal.rutube"
                          ><img
                            class="object-contain w-full col-span-2 max-h-12 lg:col-span-1 hover:rotate-45"
                            src="../assets/img/template/RUTUBE_color.png"
                            alt="Reform"
                            width="158"
                            height="48"
                        /></a>
                        <a :href="dataModal.dzen"
                          ><img
                            class="object-contain w-full col-span-2 max-h-12 lg:col-span-1 hover:rotate-45"
                            src="../assets/img/template/dark-icon.png"
                            alt="Tuple"
                            width="158"
                            height="48"
                        /></a>
                        <a :href="dataModal.rutube"
                          ><img
                            class="object-contain w-full col-span-2 max-h-12 lg:col-span-1 hover:rotate-45"
                            src="../assets/img/template/RUTUBE_color.png"
                            alt="Reform"
                            width="158"
                            height="48"
                        /></a>
                        <a :href="dataModal.youtube"
                          ><img
                            class="object-contain w-full col-span-2 max-h-12 lg:col-span-1 hover:rotate-45"
                            src="../assets/img/template/Youtube_red.png"
                            alt="Transistor"
                            width="158"
                            height="48"
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                type="button"
                class="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                @click="close"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal -->
  </div>
</template>
