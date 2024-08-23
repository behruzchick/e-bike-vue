<script setup>
import { inject } from "vue";

const { searchTitle } = inject("bike");
const { fetchBikes } = inject("bike");
const { carts } = inject("bike");
const { favorites } = inject("bike");

const handleSearch = (event) => {
  searchTitle.value = event.target.value;
  fetchBikes();
};
</script>

<template>
  <div
    class="w-full flex items-center justify-center border-b border-slate-200"
  >
    <div class="w-4/5 py-4">
      <div>
        <ul class="flex items-center justify-between">
          <li>
            <img src="/logo.png" alt="" />
          </li>

          <!-- <li class="flex"> -->
          <div class="flex justify-between">
            <li class="mr-12">
              <input
                @input="handleSearch($event)"
                type="text"
                class="outline-none border-2 p-2 pl-4 pr-12 w-[340px] rounded-[10px] border-slate-200"
                placeholder="search"
              />
            </li>

            <!-- <div class="flex items-center border-r-2 mr-4 pr-4 border-gray-200">
              <span class="flex items-center text-slate-500 cursor-pointer">
                <img src="/user-aqua.png" alt="icon" />
                Sign Up/Sign In
              </span>
            </div> -->

            <div class="flex items-center gap-6">
              <router-link to="/cart">
                <span
                  class="flex items-center gap-2 text-slate-500 cursor-pointer"
                >
                  <img src="/card-aqua.png" alt="icon" />
                  Cart
                  <span class="bg-orange-500 text-white px-2 rounded-xl">{{carts.length}}</span>
                </span>
              </router-link>
              <router-link to="/favorites">
                <span
                  class="flex items-center gap-2 text-slate-500 cursor-pointer"
                >
                  <img class="w-[22px]" src="/favorite.png" alt="icon" />
                  Favorites
                  <span class="bg-red-500 text-white px-2 rounded-xl">{{favorites.length}}</span>
                </span>
              </router-link>
            </div>
          </div>

          <!-- </li> -->
        </ul>
      </div>
      <div class="flex items-center justify-center py-8 pb-0">
        <ul class="flex gap-8">
          <router-link to="/products">
            <li
              class="text-slate-500 hover:text-aqua-color cursor-pointer transition text-[16px]"
            >
              Ebikes
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>