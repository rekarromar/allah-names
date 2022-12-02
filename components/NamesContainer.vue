<template>
  <div
    class="flex flex-col items-center justify-center h-36 gap-y-2 rounded-md p-4 border-2 border-solid hover:border-black"
  >
    <h1 class="font-name text-2xl text-center">{{ name }}</h1>
    <p class="font-lexend text-md text-center">{{ meaning }}</p>
  </div>
</template>

<script setup>
const { name, meaning } = defineProps(["name", "meaning"]);
</script>
