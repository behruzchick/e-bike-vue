<script setup>
import { inject } from "vue";

defineProps({
  title: String,
  id:Number,
  price: Number,
  rate: Number,
  imageUrl: String,
  isAdded: Boolean,
  isFavorite: Boolean,
  addToCart: Function,
  addToFavorite: Function,
  removeFromCart: Function,
});
</script>


<template>
    <div
      class="relative flex flex-col items-center justify-center border border-slate-300 rounded-xl p-4 cursor-pointer hover:-translate-y-2 hover:shadow-xl duration-300"
    >
      <img
        :src="!isFavorite ? '/not-favorite.png' : '/favorite.png'"
        class="absolute top-0 right-0 m-3"
        alt=""
        @click="addToFavorite"
      />
      <router-link :to="`/bike/${id}`">
        <img :src="imageUrl" alt="" />
      </router-link>
      <div class="flex flex-col justify-center">
        <router-link :to="`/bike/${id}`">
          <b>{{ title }}</b>
        </router-link>
        <span class="text-sm mt-2 mb-2 flex items-center"
          ><img src="/rate.png" />{{ rate }}</span
        >
        <b>${{ price }}</b>
        <button
          v-if="isAdded === false"
          class="mt-4 border flex items-center justify-center gap-3 border-cyan-500 bg-cyan-50 rounded-xl p-2 hover:bg-cyan-200 transition"
          @click="addToCart"
        >
          Add to cart <img src="/shopping-cart.png" alt="" />
        </button>
        <button
          v-if="isAdded === true"
          class="mt-4 border flex items-center justify-center gap-3 border-red-500 bg-red-50 rounded-xl p-2 hover:bg-red-200 transition"
          @click="removeFromCart"
        >
          Remove from cart
        </button>
      </div>
    </div>
</template>