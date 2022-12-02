<template>
  <div class="flex flex-col items-center gap-y-6">
    <h1 class="font-name text-6xl text-center">{{ name }}</h1>
    <p class="font-lexend text-xl md:text-3xl text-center">{{ meaning }}</p>
  </div>
</template>

<script setup>
const { name, meaning } = defineProps(["name", "meaning"]);
</script>
