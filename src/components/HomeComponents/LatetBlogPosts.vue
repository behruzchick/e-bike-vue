<script setup>
import SectionTitle from "./SectionTitle.vue";
import RelatedCard from "./RelatedCard.vue";
</script>

<template>
  <div class="w-full flex items-center justify-center pb-10">
    <div class="w-4/5">
      <SectionTitle
        title="Latest blog post"
        description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
      />
      <div class="grid grid-cols-3 gap-4 pt-10">
        <RelatedCard
          imageUrl="/rel-img-3.png"
          title="My Dream Cycling Tour"
          description="Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet"
        />
        <RelatedCard
          imageUrl="/rel-img-3.png"
          title="My Dream Cycling Tour"
          description="Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet"
        />
        <RelatedCard
          imageUrl="/rel-img-3.png"
          title="My Dream Cycling Tour"
          description="Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet"
        />
        <RelatedCard
          imageUrl="/rel-img-3.png"
          title="My Dream Cycling Tour"
          description="Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet"
        />
        <RelatedCard
          imageUrl="/rel-img-3.png"
          title="My Dream Cycling Tour"
          description="Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet"
        />
        <RelatedCard
          imageUrl="/rel-img-3.png"
          title="My Dream Cycling Tour"
          description="Where can I get some? Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet"
        />
      </div>
      <div class="w-full flex items-center justify-center pt-8">
        <button class="text-white bg-aqua-color rounded-xl pl-12 pr-12 p-2 hover:bg-cyan-500 transition">
          View all
        </button>
      </div>
    </div>
  </div>
</template>