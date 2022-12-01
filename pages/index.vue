<template>
  <div class="" v-for="n in data.data" :key="n">
    <div class="flex flex-col items-center">
      <h1>{{ n.name }}</h1>
      <p>{{ n.en.meaning }}</p>
    </div>
  </div>
</template>

<script setup>
const number = Math.floor(Math.random() * 101);
const random = number == 0 ? number + 1 : number == 100 ? number - 1 : number;
const url = "https://api.aladhan.com/v1/asmaAlHusna/" + random;
const { data } = await useFetch(url);
</script>
