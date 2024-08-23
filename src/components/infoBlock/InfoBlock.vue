<script setup>
    defineProps({
        title:String,
        imageUrl:String,
        description:String
    })
</script>   


<template>
    <div class="flex items-center justify-center ml-12">
        <div class="w-[400px] text-center">
            <img :src="imageUrl" alt=""> 
            <h1 class="text-4xl">{{title}}</h1> 
            <p class="my-2">{{description}}</p>  
        </div>    
    </div>    
</template>