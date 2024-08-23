<script setup>
import { inject, computed,ref, provide } from "vue";
import ProductSectionHeader from "../components/ProductComponents/ProductSectionHeader.vue";
import CartProduct from "../components/ProductComponents/CartProduct.vue";
import InfoBlock from "../components/infoBlock/InfoBlock.vue";

const { carts } = inject("bike");
const { removeFromCart } = inject("bike");
const countVal = ref(1)
// const { addOrder } = inject("bike");
const totalPrice = computed(() =>
  carts.value.reduce((acc, item) => acc + item.price, 0)
);


// const finalPrice = computed(() => {          
//   if (countVal.value > 1) {
//     return totalPrice.value * countVal.value;
//   }
//   return totalPrice.value;
// });

const clickBuy = () => {
  alert("Cooming soon ...");
};

provide("totalPrice",totalPrice)

provide("countVal",countVal)
</script>

<template>
  <div class="w-full">
    <ProductSectionHeader />
    <div class="w-4/5 m-auto flex pt-10 items-start gap-4">
      <div
        class="flex flex-col gap-4 overflow-hidden overflow-y-auto h-[700px] w-[90%] scrollable"
      >
        <CartProduct
          v-for="item in carts"
          :key="item.id"
          :title="item.title"
          :imageUrl="item.imageUrl"
          :price="item.price"
          isAdded="true"
          :removeFromCart="() => removeFromCart(item)"
        />
        <InfoBlock
          v-if="carts.length === 0"
          title="Products not found!"
          :isAdded="true"
          description="Items not found please try later"
          imageUrl="/not-found.avif"
        />
      </div>
      <div
        class="bg-slate-50 rounded-xl flex flex-col py-5 px-5 w-[400px] gap-4"
      >
        <div class="flex items-center justify-between">
          <b class="text-xl">Total price:</b>
          <span class="font-bold text-xl">{{ totalPrice }}$</span>
        </div>
        <div
          @click="clickBuy"
          class="rounded-xl py-4 bg-aqua text-white text-center cursor-pointer hover:bg-cyan-500 transition active:bg-cyan-400"
        >
          Buy
        </div>
      </div>
    </div>
  </div>
</template>