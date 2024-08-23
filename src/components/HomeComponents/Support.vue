<script setup>
import SectionTitle from "./SectionTitle.vue";
</script>

<template>
  <div class="pt-10 pb-10">
    <SectionTitle
      title="An Ebike for Every Type of Rider"
      description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
    />
    <div class="grid grid-cols-2 pt-10">
      <div class="bg-dark-color flex items-center justify-center">
        <div class="text-start">
          <h2 class="text-white text-5xl mb-3 font-bold">
            <b class="text-aqua">Beyond </b>the bike
          </h2>
          <b class="text-white text-xl mt-5">Real Riders. Real Experiences.</b>
          <p class="text-slate-300 mt-3 mb-3 w-[470px]">
            Our mini-series, Beyond the Bike, captures the stories of Aventon
            riders and how their ebikes are used in unexpected ways to bring
            them closer to what makes them feel most alive.
          </p>
          <a href="#" class="border-b border-aqua-color text-aqua"
            >Watch more</a
          >
        </div>
      </div>

      <div>
        <img class="w-full" src="/support-1.png" alt="" />
      </div>

      <div>
        <img class="w-full" src="/support-2.png" alt="" />
      </div>

      <div class="flex items-center justify-center">
        <div>
          <h2 class="text-black text-5xl font-bold mb-3">
            <b class="text-aqua">21</b> Day At
            <b class="text-aqua">Home Trial</b>
          </h2>
          <b class="text-black">Real Riders. Real Experiences.</b>
          <p class="text-slate-500 w-[470px] mb-3 mt-3">
            Buying a product online, can be scary. This is why we have a free
            21-day at-home trial for all new bike purchases. If your new
            ELECTROBIKE isn't the perfect fit, we'll pay for return shipping and
            issue a full refund.
          </p>
          <a href="#" class="border-b border-aqua-color text-aqua"
            >21 Day Trial Details</a
          >
        </div>
      </div>
    </div>
  </div>
</template>