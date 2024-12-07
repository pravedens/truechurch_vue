<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, onUnmounted, onMounted } from "vue";
import { userAuthStore } from "../stores/authStore";

const authStore = userAuthStore();

const userDropdown = ref(false);

const isMobileMenuVisible = ref(false);

const toggleMobileMenu = (event) => {
  event.stopPropagation();
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
};

const toggleDropdown = (event) => {
  event.stopPropagation();
  userDropdown.value = !userDropdown.value;
};

const handleClickDropdown = () => {
  if (userDropdown.value) userDropdown.value = false;
  if (isMobileMenuVisible.value) isMobileMenuVisible.value = false;
};

onMounted(() => {
  document.addEventListener("click", handleClickDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickDropdown);
});
</script>

<template>
  <div>
    <nav class="bg-gray-800">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="shrink-0">
              <img
                class="size-8"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden md:block">
              <div class="flex items-baseline ml-10 space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <RouterLink
                  to="/"
                  exactActiveClass="bg-gray-900"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  aria-current="page"
                  >Главная</RouterLink
                >
                <RouterLink
                  to="post"
                  exactActiveClass="bg-gray-900"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Проповеди</RouterLink
                >
                <RouterLink
                  to="about"
                  exactActiveClass="bg-gray-900"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >О нас</RouterLink
                >
                <RouterLink
                  to="event"
                  exactActiveClass="bg-gray-900"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >События</RouterLink
                >
                <RouterLink
                  to="portfolio"
                  exactActiveClass="bg-gray-900"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Галерея</RouterLink
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="flex items-center ml-4 md:ml-6">
              <button
                type="button"
                class="relative p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
                <svg
                  class="size-6"
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
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div class="flex gap-2">
                  <button
                    @click="toggleDropdown"
                    type="button"
                    class="relative flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="rounded-full size-8"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                  <div class="mt-1 ml-2 text-gray-300">{{ authStore.user }}</div>
                </div>

                <!--
                      Dropdown menu, show/hide based on menu state.
      
                      Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                      Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                <div
                  v-show="userDropdown"
                  class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <!-- Active: "bg-gray-100 outline-none", Not Active: "" -->
                  <RouterLink
                    to="/"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                    >Your Profile</RouterLink
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                    >Settings</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                    >Sign out</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="flex -mr-2 md:hidden">
            <!-- Mobile menu button -->
            <button
              @click="toggleMobileMenu"
              type="button"
              class="relative inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                class="block size-6"
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                class="hidden size-6"
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div v-show="isMobileMenuVisible" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <RouterLink
            to="/"
            exactActiveClass="bg-gray-900"
            class="block px-3 py-2 text-base font-medium text-white rounded-md"
            aria-current="page"
            >Главная</RouterLink
          >
          <RouterLink
            to="/post"
            exactActiveClass="bg-gray-900"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Проповеди</RouterLink
          >
          <RouterLink
            to="about"
            exactActiveClass="bg-gray-900"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >О нас</RouterLink
          >
          <RouterLink
            to="/event"
            exactActiveClass="bg-gray-900"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >События</RouterLink
          >
          <RouterLink
            to="/portfolio"
            exactActiveClass="bg-gray-900"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Галерея</RouterLink
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="shrink-0">
              <img
                class="rounded-full size-10"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="font-medium text-white text-base/5">Tom Cook</div>
              <div class="text-sm font-medium text-gray-400">
                tom@example.com
              </div>
            </div>
            <button
              type="button"
              class="relative p-1 ml-auto text-gray-400 bg-gray-800 rounded-full shrink-0 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg
                class="size-6"
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
          </div>
          <div class="px-2 mt-3 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
              >Your Profile</a
            >
            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
              >Settings</a
            >
            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
              >Sign out</a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
