<script setup>
import ProductSectionHeader from "../components/ProductComponents/ProductSectionHeader.vue";
import { useRoute, useRouter } from "vue-router";
import { onMounted, watchEffect, ref, inject } from "vue";
import axios from "axios";

const { bikes } = inject("bike");
const bikeDetail = ref({});
const route = useRoute();
const {addToFavorite} = inject("bike") 
// const rates = ref("");
const {addToCart} = inject("bike") 
const {removeFromCart} = inject("bike") 
const id = ref(route.params.id);

const getBike = () => {
  try {
    if (bikes.value.length !== 0) {
      bikeDetail.value = bikes.value.find((bike) => {
        return bike.id == id.value;
      });
      console.log(bikeDetail.value);
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getBike();
});

watchEffect(() => getBike(), bikes);
</script>

<template>
  <div>
    <ProductSectionHeader />
    <div class="w-4/5 m-auto pt-12 flex gap-6">
      <div
        class="py-12 flex items-center justify-center border border-slay-50 rounded-xl w-4/12 relative"
      >
        <img
          @click="addToFavorite(bikeDetail)"
          :src="bikeDetail.isFavorite ? '/favorite.png' : '/not-favorite.png'"
          alt="fav-icon"
          class="absolute top-3 right-3 cursor-pointer"
        />

        <img :src="bikeDetail.imageUrl" alt="bike-img" class="w-9/12" />
      </div>
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-4xl font-bold">
            {{ bikeDetail.title }}
          </h2>
          <p class="mt-3">
            Choose your own adventure with Aventure.2, fully loaded with a
            torque sensor. Its torque sensor has intuitive
          </p>
          <div class="flex items-center mt-4">
            <img v-for="num in parseInt(bikeDetail.rate)" :key="n" src="/rate.png" alt="bike-img" />
            <b class="ml-2">({{bikeDetail.rate}})</b>
          </div>
          <div class="mt-5">
            <b class="text-3xl">${{ bikeDetail.price }}</b>
          </div>
        </div>

        <div class="flex gap-5 mt-12 pb-3">
          <div>
            <button
              @click="addToCart(bikeDetail)"
              v-if="bikeDetail.isAdded === false"
              class="flex items-center border-2 border-slate-200 rounded-xl p-3 px-12 hover:border-slate-500 transition active:border-slate-200"
            >
              <img
                src="/shopping-cart-outline.png"
                class="mr-2"
                alt="car-icon"
              />
              Add to cart
            </button>
            <button
              @click="removeFromCart(bikeDetail)"
              v-if="bikeDetail.isAdded == true"
              class="flex items-center border-2 border-red-200 rounded-xl p-3 px-12 hover:border-slate-500 transition active:border-slate-200"
            >
              <img
                src="/shopping-cart-outline.png"
                class="mr-2"
                alt="car-icon"
              />
              Remove from cart
            </button>
          </div>
          <button
            class="flex items-center bg-aqua text-white text-bold rounded-xl p-3 px-12 hover:bg-cyan-500 transition active:bg-cyan-300"
          >
            <img
              class="mr-2"
              src="/electricity_outline.png"
              alt="electricity_outline-icon"
            />
            Quick buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>