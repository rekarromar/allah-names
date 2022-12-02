<template>
  <div class="flex flex-col items-center justify-between h-full">
    <div class=""></div>

    <div v-for="n in data.data" :key="n" class="">
      <NameContainer :name="n.name" :meaning="n.en.meaning" />
    </div>
    <div class="flex items-center justify-center text-2xl gap-x-2">
      <Icon name="grommet-icons:apps-rounded" />
      <NuxtLink to="/"> All Names </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute().params.id;

// const number = Math.floor(Math.random() * 101);
// const random = number == 0 ? number + 1 : number == 100 ? number - 1 : number;

const url = "https://api.aladhan.com/v1/asmaAlHusna/" + route;
const { data } = await useFetch(url);
</script>
