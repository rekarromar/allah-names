<script setup>
import names from "../assets/database/names.json";
const data = names;
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="p-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="(name, index) in data" :key="name">
        <NuxtLink :to="`${index + 1}`">
          <NamesContainer :name="name" :number="index + 1" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
