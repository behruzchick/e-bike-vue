<script setup>
import { computed, inject, onMounted, ref } from "vue";
import Card from "../HomeComponents/Card.vue";
import InfoBlock from ".././infoBlock/InfoBlock.vue";

const { bikes } = inject("bike");
const { fetchBikes } = inject("bike");
const { offset } = inject("bike");
const { addToFavorite } = inject("bike");
const { addToCart } = inject("bike");
const { removeFromCart } = inject("bike");
const { filteredPrice } = inject("bike");
const { filterByRate } = inject("bike");

const checked = ref({});
const priceFilters = ref([
  "300$ Bellow",
  "$300 - $400",
  "$400 - $500",
  "500$ Above",
]);

const filters = ref([]);

const rating = ref(1);
const stars = computed(() => {  
  return Array.from({ length: 5 }, (_, i) => i < rating.value);
});

onMounted(() => {
  // fetchBikes(9);
});

const clickPriceFilter = (item) => {
  checked.value[item] = !checked.value[item];
  filteredPrice.value = checked.value;
  filters.value.push(filteredPrice.value);
  console.log(filters.value);
  fetchBikes();
};

const incrementLimits = () => {
  offset.value += 9;
  fetchBikes(offset.value);
};
const filterProductByRate = () => {
  filterByRate.value = rating.value;
  // filters.push(filterProductByRate.value);
  fetchBikes();
};

const clearAllFilters = () => {
  filterProductByRate.value = null;
  filteredPrice.value = null;

  filters.value = []
  fetchBikes();
}
</script>

<template>
  <div class="w-full flex justify-center items-start relative pt-12">
    <div class="flex w-4/5 pt-0 flex-col items-start">
      <div class="w-full flex items-center justify-between">
        <h3 class="text-2xl font-bold">{{bikes.length}}  products found</h3>
      </div>
      <div class="pt-3 flex gap-8">
        <div>
          <div class="sticky bg-gray-100 p-4 rounded-xl w-[400px]">
            <div class="flex justify-between pb-4">
              <h2 class="text-xl font-bold">Filters</h2>
              <button @click="clearAllFilters" class="text-blue-500 font-bold">Clear</button>
            </div>
            <!-- <div class="flex flex-wrap gap-3">
              <div
                v-for="(item, index) in filters"
                :key="index"
              >
                <div
                  class="bg-aqua text-white flex items-center rounded-3xl gap-4 pl-3 py-2 pr-3 text-xl justify-between"
                >
                  <p>{{ item.item }}</p>
                  <img
                    @click="filters.value.shift(item)"
                    src="/close-icon.png"
                    class="cursor-pointer w-[15px]"
                    alt=""
                  />
                </div>
              </div>
            </div> -->

            <div class="pt-5">
              <h3 class="text-xl font-bold">Rating</h3>
              <div class="pt-3">
                <input
                  type="range"
                  @change="filterProductByRate"
                  class="w-full range-input"
                  min="1"
                  max="5"
                  v-model="rating"
                />
                <div class="w-full flex items-center justify-between">
                  <div
                    class="flex items-center"
                    v-for="(star, index) in stars"
                    :key="index"
                  >
                    <p class="text-xl">{{ index + 1 }}</p>
                    <img
                      :src="star ? '/star-icon.png' : '/star-icon-filled.png'"
                      class="w-[20px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-5">
              <h3 class="text-xl font-bold">Price</h3>
              <div class="flex flex-col gap-4 pt-4">
                <div
                  class="pt-2 flex items-center gap-2"
                  v-for="item in priceFilters"
                  :key="item"
                >
                  <img
                    @click="clickPriceFilter(item)"
                    class="cursor-pointer"
                    :src="checked[item] ? '/checked.png' : '/not-checked.png'"
                    alt=""
                  />
                  <p class="font-medium text-slate-900">{{ item }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="py-4 pb-4 relative">
          <div
            class="grid grid-cols-3 gap-4 overflow-y-auto h-[500px] scrollable"
          >


            <InfoBlock 
              v-if="bikes.length === 0"
              title="Products not found!"
              description="Items not found please later"
              imageUrl="/not-found.avif"
            />

            <Card
              v-for="item in bikes"
              :v-if="bikes !== []"
              :key="item"
              :id="item.id"
              :isFavorite="item.isFavorite"
              :isAdded="item.isAdded"
              :title="item.title"
              :imageUrl="item.imageUrl"
              :price="item.price"
              :rate="item.rate"
              :addToCart="() => addToCart(item)"
              :addToFavorite="() => addToFavorite(item)"
              :removeFromCart="() => removeFromCart(item)"
            />
          </div>

          <div
            class="absolute m-auto -bottom-7 w-full flex items-center justify-center pt-2 pb-0 bg-inherit"
          >
            <button
              @click="incrementLimits"
              class="pl-10 pr-10 rounded-xl bg-aqua-color text-white py-2 hover:bg-cyan-500 transition active:bg-cyan-400"
            >
              Show other results
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.scrollable::-webkit-scrollbar {
  opacity: 0;
}
.range-input::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  /* height:20px; */
  /* width: 10px; */
  /* border-radius: 10px;
  background: rgba(128, 128, 128, 0.274);; */
  cursor: pointer;
  border: none;
  /* margin-top: -8px; */
}
</style>
