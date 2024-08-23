<template>
  <div class="w-full flex items-center justify-center flex-col relative pt-10">
    <div class="bg-white w-full p-10"></div>
    <div
      class="bg-aqua-color w-4/5 -top-0 z-40 rounded-xl flex pb-10 pt-10 justify-around absolute"
    >
      <div class="w-[400px]">
        <b class="text-white text-3xl">Get updates on new gear and discounts</b>
        <p class="text-white mt-3">
          Stay up to date on new and exciting things available to you soon!
        </p>
      </div>
      <div>
        <form>
          <input
            type="text"
            class="input bg-inherit outline-none border-2 border-white rounded-xl pl-4 py-2 pr-12 text-white"
            placeholder="Enter your email"
          />
          <button
            class="bg-dark-color text-white p-2 rounded-xl ml-4 transition hover:bg-black active:bg-gray-950"
          >
            Subscribe
          </button>
        </form>
        <p class="text-sm text-white mt-2">
          We care about your data in our
          <a href="#" class="decoration-white border-b border-white"
            >privacy policy</a
          >
        </p>
      </div>
    </div>
    <div
      class="bg-dark-color w-full flex items-end justify-center mt-10 pt-12 pb-10 z-20"
    >
      <div class="w-4/5 pt-12">
        <div class="flex justify-between">
          <div class="mr-12 flex flex-col items-start w-[220px]">
            <img src="/logo.png" alt="" />
            <p class="text-slate-500">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div>
            <p class="text-slate-500 flex flex-col gap-3">
              <span class="text-slate-500">Support</span>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Cancellation Policy</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Register Bike</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Return Policy</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Shipping Info</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Support</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Warranty</a>
            </p>
          </div>
          <div>
            <p class="text-slate-500 flex flex-col gap-3">
              <span class="text-slate-500">Electric Bike</span>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">All Electric Bike</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Accessories</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Gift Cards</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Promotions</a>
            </p>
          </div>
          <div>
            <p class="text-slate-500 flex flex-col gap-3">
              <span class="text-slate-500">Company</span>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">About us</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Contact us</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Blog</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">Videos</a>
            </p>
          </div>
          <div>
            <p class="text-slate-500 flex flex-col gap-3">
              <span class="text-slate-500">Contact</span>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">+1 (907) 555-0101</a>
              <a href="#" class="text-sm text-white hover:text-aqua-color transition">curtis.weaver@example.com</a>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scope>
.input::placeholder {
  color: white;
}
</style>