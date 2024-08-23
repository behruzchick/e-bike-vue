<script setup>
import {ref,inject, provide} from 'vue';
defineProps({
  title: String,
  imageUrl: String,
  price: String,
  removeFromCart: Function,
  isFavorite: Boolean,
  isAdded: Boolean,
});

const totalPrice = provide('totalPrice')

const countVal = provide("countVal");

const incVal = () => {
  countVal.value += 1;
  window.localStorage.setItem('countVal',countVal.value);
  totalPrice * countVal.value;
  console.log(totalPrice);
}

const decVal = () => {
  if(countVal.value > 0){
    countVal.value -= 1;
    window.localStorage.setItem('countVal',countVal.value);
  }

}
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
    <div class="flex flex-col items-start gap-4">
      <span
        @click="removeFromCart"
        class="text-red-500 border-b border-red-500 cursor-pointer text-xl font-bold hover:text-red-400"
        >Remove from cart</span
      >
      <div class="flex gap-4">
        <button class="font-bold bg-aqua text-white px-3 rounded-3xl py-1 active:bg-cyan-400" @click="decVal">-</button>
        <span class="text-2xl">{{countVal}}</span>
        <button class="font-bold bg-aqua text-white px-3 rounded-3xl py-1 active:bg-cyan-400" @click="incVal">+</button>
      </div>
    </div>
    <!-- <span @click="isAdded ? removeFromCart : ''" class="text-red-500 border-b border-red-500 cursor-pointer text-xl font-bold hover:text-red-400">Remove from favorites</span> -->
  </div>
</template>
