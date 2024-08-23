<template>
  <header class="w-full fixed z-50">


    <div class="bg-darked-blue flex justify-center">
      <div class="w-4/5">
        <div class="flex items-center justify-center p-2">
          <span class="text-white text-sm flex gap-2"
            ><p>
              Amazing discounts on top-quality Ebike! Shop now and save big.
              Limited time offer.
            </p>
            <router-link
              ><a class="text-blue-text" href="/products"
                >Buy now</a
              ></router-link
            ></span
          >
        </div>
      </div>
    </div>


    <div class="bg-white flex justify-center items-center">
      <div class="w-4/5 flex justify-between py-4">


        <ul>
          <li>
            <img src="/logo.png" alt="" />
          </li>
        </ul>


        <ul class="flex gap-12 items-center">
          <li class="cursor-pointer text-bold">Ebikes Menu</li>
          <li class="cursor-pointer text-bold">Book Your Test Ride Today</li>
          <li class="cursor-pointer text-bold">Rental An Ebike</li>
          <li class="cursor-pointer text-bold">Full Service and Mobile Asembly</li>
        </ul>


        <ul class="flex gap-6 items-center">
          <li class="cursor-pointer">
            <img src="/search.png" alt="" />
          </li>
          <li class="cursor-pointer">
            <img src="/user.png" alt="" />
          </li>
          <li class="cursor-pointer">
            <img src="/shopping-cart.png" alt="" />
          </li>
        </ul>
      </div>
    </div>


    <div class="bg-aqua flex justify-center items-center">
        <div class="flex items-center">
            <img class="w-[50px] mr-2" src="/bikes/bike-3.png" alt="bike-img">
            <p>EMotorad X2 Unisex Mountain Electric Cycle - <span class="font-bold">$1999.99</span><span class="text-sm">($300 OFF)</span> </p>
        </div>
    </div>

  </header>
</template>