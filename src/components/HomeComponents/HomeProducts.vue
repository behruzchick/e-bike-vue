<script setup>
import { ref, inject,onMounted } from "vue";

import SelectMenu from "./SelectMenu.vue";
import Card from "./Card.vue";
import SectionTitle from "./SectionTitle.vue";

const checked = ref({});
const filterPanels = ref([
  "Comfort",
  "Folding",
  "Light Trail",
  "Hunting/Fishing",
  "Full Suspension",
]);

const { bikes } = inject("bike");
const { clickOffset } = inject("bike");
const { fetchBikes } = inject("bike");

const clickSelectedFilter = (item) => {
  checked.value[item] = !checked.value[item];
  clickOffset(8);
};


 onMounted(() => {
    fetchBikes(8)
 })
</script>

<template>
  <div class="w-full flex items-center justify-center relative p-8">
    <div class="w-4/5 pt-12">
      <SectionTitle
        title="An Ebike for Every Type of Rider"
        description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
      />
      <div>
        <div class="w-full pt-12 pb-12 gap-12 flex items-center justify-center">
          <div
            class="w-[300px] p-4 flex items-center justify-center flex-col text-center bg-slate-100 rounded-xl cursor-pointer transition hover: hover:-translate-y-2"
          >
            <img class="w-[256px]" src="/bikes/bike-9.png" alt="" />
            <div>
              <b class="text-4xl"> Montra </b>
              <p class="text-slate-500 text-xl mt-3 mb-3">Bicycles</p>
              <button
                class="flex justify-center items-center bg-aqua-color text-white pl-8 pr-8 rounded-xl p-3 transition hover:bg-cyan-500"
              >
                Explore
                <img class="ml-2" src="/arrow-up.png" alt="" />
              </button>
            </div>
          </div>
          <div
            class="w-[300px] p-4 flex items-center justify-center flex-col text-center bg-slate-100 rounded-xl cursor-pointer transition hover: hover:-translate-y-2"
          >
            <img class="w-[256px]" src="/bikes/bike-9.png" alt="" />
            <div>
              <b class="text-4xl"> Giant </b>
              <p class="text-slate-500 text-xl mt-3 mb-3">Bicycles</p>
              <button
                class="flex justify-center items-center bg-aqua-color text-white pl-8 pr-8 rounded-xl p-3 transition hover:bg-cyan-500"
              >
                Explore
                <img class="ml-2" src="/arrow-up.png" alt="" />
              </button>
            </div>
          </div>
          <div
            class="w-[300px] p-4 flex items-center justify-center flex-col text-center bg-slate-100 rounded-xl cursor-pointer transition hover: hover:-translate-y-2"
          >
            <img class="w-[256px]" src="/bikes/bike-9.png" alt="" />
            <div>
              <b class="text-4xl"> Silverback </b>
              <p class="text-slate-500 text-xl mt-3 mb-3">Bicycles</p>
              <button
                class="flex justify-center items-center bg-aqua-color text-white pl-8 pr-8 rounded-xl p-3 transition hover:bg-cyan-500"
              >
                Explore
                <img class="ml-2" src="/arrow-up.png" alt="" />
              </button>
            </div>
          </div>
          <div
            class="w-[300px] p-4 flex items-center justify-center flex-col text-center bg-slate-100 rounded-xl cursor-pointer transition hover: hover:-translate-y-2"
          >
            <img class="w-[256px]" src="/bikes/bike-9.png" alt="" />
            <div>
              <b class="text-4xl"> Element </b>
              <p class="text-slate-500 text-xl mt-3 mb-3">Bicycles</p>
              <button
                class="flex justify-center items-center bg-aqua-color text-white pl-8 pr-8 rounded-xl p-3 transition hover:bg-cyan-500"
              >
                Explore
                <img class="ml-2" src="/arrow-up.png" alt="" />
              </button>
            </div>
          </div>
        </div>

        <SelectMenu />

        <div class="pt-10 flex items-center justify-center gap-4">
          <div
            v-for="item in filterPanels"
            :key="item"
            @click="clickSelectedFilter(item)"
            class="bg-cyan-50 border border-aqua-color cursor-pointer text-black pl-4 p-2 w-[300px] rounded-xl flex items-center gap-2"
          >
            <img
              :src="checked[item] ? '/checked.png' : '/not-checked.png'"
              alt="checked-img"
            />
            <p class="text-xl">{{ item }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-6 pt-10">
        <Card
          v-for="item in bikes"
          :key="item.id"
          :title="item.title"
          :price="item.price"
          :rate="item.rate"
          :imageUrl="item.imageUrl"
        />
      </div>
      <div class="w-full mt-8 flex items-center justify-center">
        <button
          class="p-2 pl-12 pr-12 bg-aqua-color text-white rounded-xl hover:bg-cyan-500 transition"
        >
          View all
        </button>
      </div>
    </div>
  </div>
</template>