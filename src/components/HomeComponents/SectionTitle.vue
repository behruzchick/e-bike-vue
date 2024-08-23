<script setup>
    defineProps({
        title:String,
        description:String,

    })
</script>

<template>
  <div class="text-center">
    <h2 class="text-4xl font-bold">
        {{title}}
    </h2>
    <p class="text-slate-500 mt-6">
        {{description}}
    </p>
  </div>
</template>