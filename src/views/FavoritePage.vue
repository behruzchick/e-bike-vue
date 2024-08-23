<script setup>
import { inject,computed } from "vue";
import ProductSectionHeader from "../components/ProductComponents/ProductSectionHeader.vue";
import CartProduct from "../components/ProductComponents/CartProduct.vue";
import FavoriteProduct from "../components/ProductComponents/FavoriteProduct.vue";
import InfoBlock from "../components/infoBlock/InfoBlock.vue";

const { favorites } = inject("bike");
const { addToFavorite } = inject("bike");
const { addToCart } = inject("bike");
// const { addOrder } = inject("bike");
const totalPrice = computed(() => favorites.value.reduce((acc,item) => acc + item.price, 0));

</script>

<template>
  <div class="w-full">
    <ProductSectionHeader />
    <div
      class="w-4/5 m-auto flex pt-10 items-start gap-4"
    >
      <div class="flex flex-col gap-4 overflow-hidden overflow-y-auto h-[700px] w-[90%] scrollable">
        <FavoriteProduct
          v-for="item in favorites"
          :key="item.id"
          :title="item.title"
          :imageUrl="item.imageUrl"
          :price="item.price"
          :isFavorite="true"
          :addToCart="() => addToCart(item)"
          :addToFavorite="() => addToFavorite(item)"
        />
        <InfoBlock
          v-if="favorites.length === 0"
          title="Products not found!"
          description="Items not found please try later"
          imageUrl="/not-found.avif"
        />
      </div>
      <div class="bg-slate-50 rounded-xl flex flex-col py-5 px-5 w-[400px] gap-4">
        <div class="flex items-center justify-between">
            <b class="text-xl">Total price:</b>
            <span class="font-bold text-xl">{{totalPrice}}$</span>
        </div>
      </div>
    </div>
  </div>
</template>