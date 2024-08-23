<script setup>
import { onMounted, ref } from "vue";

const dateInput = ref(null);

onMounted(() => {
//   if (dateInput) {
//     dateInput.value.focus();
//     dateInput.value.action();
//   }
});
</script>

<template>
  <div class="pt-10 pb-10 flex items-center justify-center">
    <div class="w-4/5 relative flex items-center justify-center h-screen">
      <img
        src="/book-ride.png"
        class="absolute top-0 left-0 w-full -z-19"
        alt=""
      />
      <div class="w-full relative flex justify-around">
        <div>
          <h2 class="text-5xl text-white font-bold">
            <b class="text-aqua">Book</b> Your Test
            <b class="text-aqua">Ride</b>
          </h2>
          <p class="w-[600px] text-white mt-4 mb-4 text-xl">
            Don't just imagine the ride of your dreams, feel it for yourself
            with a test ride! Book now and experience the exhilaration, comfort,
            and performance of our cutting-edge vehicles. From the sleek curves
            to the responsive handling.
          </p>
          <button
            class="pl-8 pr-8 p-2 bg-aqua-color rounded-xl text-white transition hover:bg-cyan-500"
          >
            Book ride now
          </button>
        </div>
        <div>
          <input class="date" ref="dateInput" type="date" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
/* .date::-webkit-datetime-edit { padding: 1em; }
::-webkit-datetime-edit-fields-wrapper { background: silver; }
::-webkit-datetime-edit-text { color: red; padding: 0 0.3em; }
::-webkit-datetime-edit-month-field { color: blue; }
::-webkit-datetime-edit-day-field { color: green; }
::-webkit-datetime-edit-year-field { color: purple; }
::-webkit-inner-spin-button { display: none; }
::-webkit-calendar-picker-indicator { background: red; } */
</style>