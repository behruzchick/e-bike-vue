<script setup>
import { provide, onMounted, ref, watch } from "vue";
import axios from "axios";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";
import Footer from "./components/HomeComponents/Footer.vue";
import Header from "./components/HomeComponents/Header.vue";

const offset = ref(9);

const bikes = ref([]);
const favorites = ref([]);
const orders = ref([]);
const productPrice = ref([]);
const carts = ref([]);
const filterByRate = ref(null);
const filteredPrice = ref(null);
const searchTitle = ref("");

//  FETCHS

const fetchBikes = async (offset) => {
  try {
    const { data } = await axios.get(
      `https://9d838b674b17b677.mokky.dev/bikes?limit=${offset}`
    );

    productPrice.value = data.items.map((obj) => obj.price);

    let tempBikes = data.items.map((obj) => ({
      ...obj,
      isAdded: false,
      isFavorite: false,
    }));

    if (filteredPrice.value === null) {
      bikes.value = data.items.map((obj) => ({
        ...obj,
        isAdded: false,
        isFavorite: false,
      }));
    } else {
      if (filteredPrice.value["300$ Bellow"] === true) {
        tempBikes = tempBikes.filter((item) => item.price <= 300);
      }
      if (filteredPrice.value["$300 - $400"]) {
        tempBikes = tempBikes.filter(
          (item) => item.price >= 300 && item.price <= 400
        );
      }
      if (filteredPrice.value["$400 - $500"]) {
        tempBikes = tempBikes.filter(
          (item) => item.price >= 400 && item.price <= 500
        );
      }
      if (filteredPrice.value["500$ Above"]) {
        tempBikes = tempBikes.filter((item) => item.price >= 500);
      }

      bikes.value = tempBikes;
    }

    if (filterByRate.value !== null) {
      bikes.value = bikes.value.filter(
        (item) => item.rate === filterByRate.value
      );
    }

    if (searchTitle.value !== "") {
      bikes.value = bikes.value.filter((item) => {
        return searchTitle.value === ""
          ? item
          : item.title.toLowerCase().includes(searchTitle.value.toLowerCase());
      });
    }

    fetchFavorites();
    fetchTrash();
  } catch (error) {
    console.log(error);
  }
};

const fetchFavorites = async () => {
  try {
    const { data: fav } = await axios.get(
      `https://9d838b674b17b677.mokky.dev/favorites`
    );

    bikes.value = bikes.value.map((item) => {
      const favorite = fav.find((favorite) => favorite.parentId === item.id);

      if (!favorite) {
        return item;
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      };
    });

    favorites.value = bikes.value.filter((item) => item.isFavorite === true);
  } catch (error) {
    console.log(error);
  }
};

const fetchTrash = async () => {
  try {
    const { data: cart } = await axios.get(
      `https://9d838b674b17b677.mokky.dev/cart`
    );

    bikes.value = bikes.value.map((item) => {
      const trash = cart.find((card) => card.parentId === item.id);

      if (!trash) {
        return item;
      }

      return {
        ...item,
        isAdded: true,
        trashId: trash.id,
      };
    });

    carts.value = bikes.value.filter((item) => item.isAdded === true);
  } catch (error) {
    console.log(error);
  }
};

// const fetchOrders = async () => {
//   try {
//     const { data: cart } = await axios.get(
//       `https://9d838b674b17b677.mokky.dev/orders`
//     );
//     orders.value = cart.value;
//     // fetchBikes();
//   } catch (error) {
//     console.log(error);
//   }
// };



// FETCHS

// -------------------- product acions (add to favorite , add to cart) ----------------------

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id,
        isFavorite:true,
        title:item.title,
        price:item.price,
        imageUrl:item.imageUrl
      };

      item.isFavorite = true;
  
      await axios.post(`https://9d838b674b17b677.mokky.dev/favorites`, obj); 
    } else {
      item.isFavorite = false;
      await axios.delete(
        `https://9d838b674b17b677.mokky.dev/favorites/${item.favoriteId}`
      );
    }
    fetchBikes();
  } catch (error) {
    console.log(error);
  }
};

const addToCart = async (item) => {
  try {

    const obj = {
        parentId: item.id,
        isAdded:true,
        title:item.title,
        imageUrl:item.imageUrl,
        price:item.price
    };

    item.isAdded = true;

    await axios.post(`https://9d838b674b17b677.mokky.dev/cart`, obj);
    fetchBikes();
  } catch (error) {
    console.log(error);
  }
};

const removeFromCart = async (item) => {
  try {
    item.isAdded = false;
    await axios.delete(
      `https://9d838b674b17b677.mokky.dev/cart/${item.trashId}`
    );

    fetchBikes();
  } catch (error) {
    console.log(error);
  }
};
console.log("FAVORITES",favorites.value);

// -------------------- product acions (add to favorite , add to cart) ----------------------

onMounted(async () => {
  await fetchBikes(offset.value);
});

provide("bike", {
  bikes,
  favorites,
  fetchBikes,
  offset,
  carts,
  addToFavorite,
  addToCart,
  removeFromCart,
  filteredPrice,
  filterByRate,
  searchTitle,
  // addOrder
});

watch(() => offset.value, fetchBikes, filteredPrice, filterByRate, searchTitle);
</script>


<template>
  <!-- <div class="w-screen m-auto h-full flex justify-center flex-col"> -->
  <div>
    <router-view> </router-view>
    <router-view name="Products"> </router-view>
    <router-view name="Product"> </router-view>
  </div>

  <!-- </div> -->
</template>