<template>
  <div
    class="flex flex-col items-center justify-center w-full h-40 gap-y-2 rounded-md p-4 border-2 border-solid hover:border-black hover:scale-105"
  >
    <div
      class="flex justify-center items-center bg-black text-white w-7 h-7 rounded-full"
    >
      {{ number }}
    </div>

    <h1 class="font-name text-3xl md:text-2xl text-center">{{ name.name }}</h1>
    <p class="font-lexend text-md text-center">{{ name.english }}</p>

    <!-- <Icon name="ion:more" class="text-2xl" /> -->
  </div>
</template>

<script setup>
const { name, number } = defineProps(["name", "number"]);
</script>
