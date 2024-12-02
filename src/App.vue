<template>
  <div class="min-h-full">
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
                <a
                  href="#"
                  class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                  aria-current="page"
                  >Dashboard</a
                >
                <a
                  href="#"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Team</a
                >
                <a
                  href="#"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Projects</a
                >
                <a
                  href="#"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Calendar</a
                >
                <a
                  href="#"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Reports</a
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
                <div>
                  <button
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
                  class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <!-- Active: "bg-gray-100 outline-none", Not Active: "" -->
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                    >Your Profile</a
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
      <div class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
            aria-current="page"
            >Dashboard</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Team</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Projects</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Calendar</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Reports</a
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

    <header class="bg-white shadow">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>
      </div>
    </header>
    <main>
      <div class="py-4 g-white sm:py-8">
        <div class="px-6 mx-auto max-w-7xl lg:px-8">
          <div class="max-w-2xl mx-auto lg:text-center">
            <p
              class="mt-2 text-4xl font-semibold tracking-tight text-center text-gray-900 text-pretty sm:text-5xl lg:text-balance"
            >
              Проповеди
            </p>
            <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <label
                  for="country"
                  class="block font-medium text-gray-900 text-sm/6"
                  >Country</label
                >
                <div class="grid grid-cols-1 mt-2">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <svg
                    class="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="country"
                  class="block font-medium text-gray-900 text-sm/6"
                  >Country</label
                >
                <div class="grid grid-cols-1 mt-2">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <svg
                    class="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="country"
                  class="block font-medium text-gray-900 text-sm/6"
                  >Country</label
                >
                <div class="grid grid-cols-1 mt-2">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <svg
                    class="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div
          class="max-w-2xl px-4 py-4 mx-auto sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8"
        >
          <div
            class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            <a href="#" class="group">
              <div class="flex items-center justify-between text-xs gap-x-4">
                <time datetime="2020-03-16" class="text-gray-500"
                  >Mar 16, 2020</time
                >
                <p
                  href="#"
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >Павел Райн</p
                >
              </div>
              <img
                src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] mt-4"
              />
              <div class="relative group">
                <h3
                  class="mt-3 font-semibold text-center text-gray-900 text-lg/6 group-hover:text-gray-600"
                >
                  <span class="absolute inset-0"></span>
                  Boost your conversion rate
                </h3>
                <p class="mt-5 text-gray-600 line-clamp-3 text-sm/6">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </a>

            <a href="#" class="group">
              <div class="flex items-center justify-between text-xs gap-x-4">
                <time datetime="2020-03-16" class="text-gray-500"
                  >Mar 16, 2020</time
                >
                <p
                  href="#"
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >Михаил Дубровский</p
                >
              </div>
              <img
                src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg"
                alt="Olive drab green insulated bottle with flared screw lid and flat top."
                class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] mt-4"
              />
              <div class="relative group">
                <h3
                  class="mt-3 font-semibold text-center text-gray-900 text-lg/6 group-hover:text-gray-600"
                >
                  <span class="absolute inset-0"></span>
                  Boost your conversion rate
                </h3>
                <p class="mt-5 text-gray-600 line-clamp-3 text-sm/6">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </a>

            <a href="#" class="group">
              <div class="flex items-center justify-between text-xs gap-x-4">
                <time datetime="2020-03-16" class="text-gray-500"
                  >Mar 16, 2020</time
                >
                <p
                  href="#"
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >Сергей Лукьянов</p
                >
              </div>
              <img
                src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg"
                alt="Person using a pen to cross a task off a productivity paper card."
                class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] mt-4"
              />
              <div class="relative group">
                <h3
                  class="mt-3 font-semibold text-center text-gray-900 text-lg/6 group-hover:text-gray-600"
                >
                  <span class="absolute inset-0"></span>
                  Boost your conversion rate
                </h3>
                <p class="mt-5 text-gray-600 line-clamp-3 text-sm/6">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </a>

            <a href="#" class="group">
              <div class="flex items-center justify-between text-xs gap-x-4">
                <time datetime="2020-03-16" class="text-gray-500"
                  >Mar 16, 2020</time
                >
                <p
                  href="#"
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >Денис Орловский</p
                >
              </div>
              <img
                src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg"
                alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] mt-4"
              />
              <div class="relative group">
                <h3
                  class="mt-3 font-semibold text-center text-gray-900 text-lg/6 group-hover:text-gray-600"
                >
                  <span class="absolute inset-0"></span>
                  Boost your conversion rate
                </h3>
                <p class="mt-5 text-gray-600 line-clamp-3 text-sm/6">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </a>

            <!-- More products... -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup></script>
