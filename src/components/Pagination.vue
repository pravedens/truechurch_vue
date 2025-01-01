<template>
  <div class="flex justify-center p-2 mt-10 bg-gray-400">
    <!-- Pagination -->
    <nav class="flex items-center gap-x-1" aria-label="Pagination">
      <button @click="functPost(getNumber(data.prev_page_url))"
        v-if="data.prev_page_url"
        type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Previous"
      >
        <svg
          class="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span>Назад</span>
      </button>
      <div class="flex items-center gap-x-1">
        <span v-for="(item, index) in data.links" :key="index">
          <button
            v-if="
              cleanLabel(item.label) !== '«' && cleanLabel(item.label) !== '»'
            "
            type="button"
            :class="{ 'bg-gray-300 hover:bg-gray-300': item.active }"
            class="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none hover:bg-neutral-300"
            aria-current="page"
            v-html="item.label"
            @click="functPost(index)"
          ></button>
        </span>
      </div>
      <button @click="functPost(getNumber(data.next_page_url))"
        v-if="data.next_page_url"
        type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Next"
      >
        <span>Вперед</span>
        <svg
          class="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </nav>
    <!-- End Pagination -->
  </div>
</template>

<script setup>

defineProps({
  data: Object,
  functPost: Function
});

function cleanLabel (label) {
  return String(label)
    .replace(/pagination.previous/g, "«")
    .replace(/pagination.next/g, "»")
    .trim();
}

function getNumber(url){
  // Parse URL
  const urlObj = new URL(url);
  
  // Get value "page"
  const page = urlObj.searchParams.get("page");

  return page;
}
</script>
