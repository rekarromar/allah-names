<script setup>
const currentDate = new Date();

const year = ref(currentDate.getFullYear());

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>

<template>
  <div v-show="loading" class="h-screen flex justify-center items-center">
    <Icon name="ion:load-c" class="animate-spin text-3xl" />
  </div>
  <div
    v-show="!loading"
    class="max-w-5xl w-full mx-auto flex flex-col gap-y-7 justify-between h-screen items-center px-3 py-10 md:p-14"
  >
    <Header class="font-roboto" />

    <slot class="flex-1" />

    <div class="pb-10 font-lexend flex flex-col items-center">
      <a
        href="https://raw.githubusercontent.com/rekarromar/allah-names/master/assets/database/names.json"
        >Download Allah Names in JSON Format</a
      >
      <div>&copy; {{ year }} - {{ year - 1 }}</div>
    </div>
  </div>
</template>
