<script setup>
defineProps({
  title: String,
  imageUrl: String,
  price: String,
  addToFavorite: Function,
  isFavorite: Boolean,
  isAdded: Boolean,
  addToCart: Function,
});
</script>

<template>
  <div
    class="flex items-center justify-between w-full border-2 border-slate rounded-xl px-4 hover:shadow-xl transition"
  >
    <div class="flex items-center">
      <img :src="imageUrl" alt="bike-image" />
      <div>
        <h2 class="text-3xl font-bold">{{ title }}</h2>
        <b class="font-bold text-xl">${{ price }}</b>
      </div>
    </div>
    <div class="flex flex-col items-end gap-4">
      <span
        @click="addToFavorite"
        class="text-red-500 border-b border-red-500 cursor-pointer text-xl font-bold hover:text-red-400 active:border-red-100"
        >Remove from favorites</span
      >
      <span
        @click="addToCart"
        class="text-aqua border-b border-aqua cursor-pointer text-xl font-bold hover:text-cyan-400 active:border-cyan-100"
        >{{isAdded ? 'Remove from cart' : 'Add to cart'}}</span
      >
    </div>
  </div>
</template>
