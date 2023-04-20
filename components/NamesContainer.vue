<template>
  <div
    class="flex flex-col items-center justify-center h-40 gap-y-2 rounded-md p-4 border-2 border-solid hover:border-black"
  >
    <h1 class="font-name text-2xl text-center">{{ name.name }}</h1>
    <p class="font-lexend text-md text-center">{{ name.english_meaning }}</p>

    <button>></button>
  </div>
</template>

<script setup>
const { name } = defineProps(["name"]);
</script>
