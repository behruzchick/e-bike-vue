<script setup>
    defineProps({
        imageUrl:String,
        title:String,
        description:String
    })
</script>

<template>
        <div class="rounded-xl border border-slate-300 overflow-hidden cursor-pointer duration-300 hover:shadow-xl hover:-translate-y-2">
            <img class="w-full" :src="imageUrl" alt="">
            <div class="p-4 relative">
                <img class="absolute top-0 right-0 p-2" src="/arrow-up-black.png" alt="">
                <b class="text-xl">{{title}}</b>
                <p class="text-slate-500 pt-3">{{description}}</p>
            </div>
        </div>
</template>