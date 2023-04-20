<template>
  <div class="flex flex-col items-center">
    <h1 class="font-name text-6xl text-center mt-16">{{ name.name }}</h1>
    <p class="font-lexend text-xl md:text-3xl text-center mt-3 mb-3">
      {{ name.english }}
    </p>

    <div
      class="flex flex-col items-center text-center max-w-5xl w-full mt-16 mb-16"
    >
      <div
        v-for="lang in languages"
        :key="lang"
        class="flex w-full gap-2"
        v-show="name[lang] != ''"
      >
        <h1>{{ lang }}:</h1>
        <h1>{{ name[lang] }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const { name } = defineProps(["name"]);

let languages = [
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
