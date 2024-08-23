<script setup>

    import {ref} from 'vue'

    defineProps({
        title:String,
        description:String
    })

    const openAccordion = ref(false);
    // const openValueBtn = ref("+");

    const handleCLickAccordion = () => {
        openAccordion.value =! openAccordion.value;
    }

</script>

<template>
    <div class="border-b border-slate-500 w-full cursor-pointer" @click="handleCLickAccordion">
        <div class="p-3 flex items-center justify-between">
            <b>Are Electric Bicycles safe?</b>
            <button class="border-2 border-slate-500 rounded-full text-2xl font-bold w-[30px] h-[30px] flex items-center justify-center text-gray-500" @click="handleCLickAccordion">{{openAccordion ? "-" : "+"}}</button>
        </div>
        <div v-if="openAccordion" class="p-3">
            <p class="text-slate-500">Yes, electric bicycles are faster than normal bicycles when riding in the electric-assisted mode and can go up to 25kmph speed. One can operate them as a regular bicycle by turning off the electric assist, and they will be as fast as a regular bicycle.</p>
        </div>
    </div>
</template>