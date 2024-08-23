<script setup>
import SectionTitle from "./SectionTitle.vue";
import Accordion from "./Accordion.vue";
</script>

<template>
  <div class="w-full flex justify-center items-center pt-10 pb-10">
    <div class="w-4/5 flex items-center justify-center flex-col">
      <SectionTitle
        title="FAQ for Electobike"
        description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
      />
      <div class="flex flex-col items-center justify-center pt-10 w-full">
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
  </div>
</template>