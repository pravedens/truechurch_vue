<template>
  <div>
    <div class="bg-white">
      <div
        class="max-w-2xl px-4 py-4 mx-auto sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8"
      >
        <div
          class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <a
            @click="showModal(post)"
            class="group"
            v-for="(post, index) in dataPost"
            :key="index"
          >
            <div class="flex items-center justify-between text-xs gap-x-4">
              <p class="text-gray-500">{{ post.created_at }}</p>
              <p
                href="#"
                class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                Категория
              </p>
            </div>
            <img
              :src="post.thumbnail"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] mt-4"
            />
            <div class="relative group">
              <h3
                class="mt-3 font-semibold text-center text-gray-900 text-lg/6 group-hover:text-gray-600"
              >
                <span class="absolute inset-0"></span>
                {{ post.title }}
              </h3>
            </div>
          </a>

          <!-- More products... -->
        </div>
      </div>
    </div>

    <!-- Paginate -->
    <div
      class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
    >
      <div class="flex justify-between flex-1 sm:hidden">
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >Previous</a
        >
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >Next</a
        >
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">1</span>
            to
            <span class="font-medium">10</span>
            of
            <span class="font-medium">97</span>
            results
          </p>
        </div>
        <div>
          <nav
            class="inline-flex -space-x-px rounded-md shadow-sm isolate"
            aria-label="Pagination"
          >
            <a
              href="#"
              class="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
            <a
              href="#"
              aria-current="page"
              class="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >1</a
            >
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >2</a
            >
            <a
              href="#"
              class="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >3</a
            >
            <span
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
              >...</span
            >
            <a
              href="#"
              class="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >8</a
            >
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >9</a
            >
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >10</a
            >
            <a
              href="#"
              class="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Next</span>
              <svg
                class="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
    <!-- End Paginate -->

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
            class="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-12 sm:w-full sm:max-w-max"
          >
            <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="flex items-center justify-center mx-auto bg-red-100 rounded-full size-12 shrink-0 sm:mx-0 sm:size-6"
                >
                  <svg
                    class="text-red-600 size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    class="text-base font-semibold text-gray-900"
                    id="modal-title"
                  >
                    {{ dataModal.title }}
                  </h3>
                  <div class="mt-2">
                    <p
                      class="text-sm text-gray-500"
                      v-html="dataModal.description"
                    ></p>
                    <p
                      class="text-sm text-gray-500"
                      v-html="dataModal.content"
                    ></p>
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

<script setup>
import { ref } from "vue";

defineProps({
  dataPost: Object,
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