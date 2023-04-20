<template>
  <div class="flex flex-col items-center">
    <h1 class="font-name text-6xl text-center mt-16">{{ name.name }}</h1>
    <p class="font-lexend text-xl md:text-3xl text-center mt-3 mb-3">
      {{ name.english }}
    </p>
    <div class="flex justify-center gap-x-3">
      <NuxtLink :to="prevName" v-if="prevName > 0">
        <Icon
          name="uil:angle-left"
          class="text-3xl bg-black text-white rounded-full"
        />
      </NuxtLink>
      <NuxtLink :to="nextName" v-if="nextName < 100">
        <Icon
          name="uil:angle-right"
          class="text-3xl bg-black text-white rounded-full"
        />
      </NuxtLink>
    </div>

    <div
      class="flex flex-col items-center text-left max-w-5xl w-full mt-16 mb-16"
    >
      <div
        v-for="lang in languages"
        :key="lang"
        class="flex justify-start w-full gap-2 max-w-md mb-2"
        v-show="name[lang] != ''"
      >
        <h1 class="font-lexend font-bold">{{ lang }}:</h1>
        <h1 class="font-name">{{ name[lang] }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const { name, id } = defineProps(["name", "id"]);

const nameNext = parseInt(id) + 1;
const nextName = nameNext.toString();

const namePrev = parseInt(id) - 1;
const prevName = namePrev.toString();

const languages = [
  "kurdish",
  "persian",
  "turkish",
  "spanish",
  "french",
  "chinese",
  "japanese",
  "korean",
  "hindi",
  "russian",
];
</script>
