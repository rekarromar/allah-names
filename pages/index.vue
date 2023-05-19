<script setup>
import namesJson from "../assets/database/names.json";
import allahQuotes from "../assets/database/quotes/allah.json";
import prophetQuotes from "../assets/database/quotes/prophet.json";

const names = ref(namesJson);

function searchList(search) {
  if (search == "") {
    names.value = namesJson;
  } else {
    names.value = namesJson.filter((e) => e.name.indexOf(search) != -1);
  }
}

const search = ref();
</script>

<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex flex-col gap-y-5 items-center text-center">
      <!-- <div
        class=" font-quran text-lg flex flex-col items-center text-center"
        v-for="allah in allahQuotes"
        :key="allah.quote"
      >
        <span class="font-bold font-name bg-gray-200 rounded-full py-1 px-2">
          قال تعالی
        </span>
        <span>{{ allah.quote }}</span>
      </div> -->
      <div
        class="font-quran text-lg flex flex-col items-center text-center"
        v-for="prophet in prophetQuotes"
        :key="prophet.quote"
      >
        <span class="font-bold font-name bg-gray-200 rounded-full py-1 px-2">
          قال رَسُولَ اللَّهِ ﷺ
        </span>
        <span>{{ prophet.quote }}</span>
      </div>
    </div>
    <div class="w-full bg-gray-50 rounded-full mt-4 flex flex-row px-3 py-1">
      <input
        type="text"
        class="flex-1 bg-transparent text-right px-3 outline-none placeholder:text-gray-500 placeholder:font-name"
        placeholder="ابحث عن اسم"
        v-model="search"
        @input="searchList(search)"
      />
      <div
        class="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-xl"
      >
        <Icon name="zondicons:search" class="" />
      </div>
    </div>
    <div
      class="mt-2 md:mt-0 p-1 md:p-4 grid gap-2 md:gap-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full"
    >
      <div v-for="(name, index) in names" :key="name">
        <NuxtLink :to="`${index + 1}`">
          <NamesContainer :name="name" :number="index + 1" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
