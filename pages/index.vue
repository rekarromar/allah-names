<template>
  <div class="p-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div v-for="n in data.data" :key="n.number">
      <NuxtLink :to="`${n.number}`">
        <NamesContainer :name="n.name" :meaning="n.en.meaning" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: data } = await useFetch("https://api.aladhan.com/v1/asmaAlHusna");
</script>
