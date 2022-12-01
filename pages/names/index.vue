<template>
    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="n in data.data" :key="n">
            <div class="text-center text-2xl bg-slate-50 rounded-md p-7 flex flex-col items-center gap-3 hover:shadow-md">
                <h1>{{n.name}}</h1>
                <p>{{n.en.meaning}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'names'
    })

    const {data} = await useFetch('https://api.aladhan.com/v1/asmaAlHusna')
</script>
