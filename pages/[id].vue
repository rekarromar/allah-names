<template>
  <div class="flex flex-col items-center justify-between h-full">
    <div class=""></div>

    <NameContainer :name="data" />

    <div class="flex items-center justify-center text-2xl gap-x-2">
      <Icon name="grommet-icons:apps-rounded" />
      <NuxtLink to="/"> All Names </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import names from "../assets/database/names.json";

const route = useRoute().params.id;

const data = names[parseInt(route)];

console.log(data);
</script>
