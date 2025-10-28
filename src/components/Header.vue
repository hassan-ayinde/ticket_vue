<template>
  <header class="wavy-bg relative h-140">
    <!-- Decorative Circles -->
    <div class="circle" style="width:150px; height:150px; top:10%; left:5%"></div>
    <div class="circle" style="width:50px; height:50px; top:20%; right:15%"></div>
    <div class="circle" style="width:100px; height:100px; bottom:25%; right:5%"></div>
    <div class="circle" style="width:80px; height:80px; top:60%; left:15%"></div>

    <section class="flex items-center justify-between w-[75%] mx-auto pt-5">
      <div class="flex items-center gap-4 text-white font-bold text-2xl">
        <v-icon name="bs-ticket" />
        <h1 class="hidden md:block">SupportFlow</h1>
      </div>

      <nav>
        <ul class="flex gap-8 text-white font-medium">
          <li>
            <RouterLink to="/login">Login</RouterLink>
          </li>
          <li>
            <RouterLink to="/dashboard">Register</RouterLink>
          </li>
        </ul>
      </nav>
    </section>

    <!-- Hero Content -->
    <section class="w-[75%] mx-auto grid md:grid-cols-2 gap-12">
      <div class="mt-10 gap-6 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 class="text-white text-xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tighter">
          Streamline Your Support with SupportFlow
        </h1>
        <h2 class="text-white/90 text-sm md:text-xl font-normal leading-8 max-w-xl">
          The effortless way to manage customer support tickets, so you can focus on what matters most: your customers.
        </h2>
        <div class="flex flex-col sm:flex-row flex-wrap gap-4 mt-6 justify-center lg:justify-start">
          <button
            class="flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-100 text-white text-base font-bold leading-normal tracking-wide transition-transform hover:scale-105"
          >
            <span class="truncate text-gray-700">Get Started</span>
          </button>
          <button
            class="flex md:hidden min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/20 text-white text-base font-bold leading-normal tracking-wide transition-colors hover:bg-white/30"
          >
            <span class="truncate">Login</span>
          </button>
        </div>
      </div>

      <div class="hidden md:block mt-10 z-10">
        <img
          alt="SupportFlow application dashboard screenshot showing tickets and analytics."
          class="w-full h-auto rounded-xl shadow-2xl transform lg:rotate-3 lg:scale-100"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBegnsckiuGwRiflMajv3PtyQD4j9H4ODt8ntfTBZG0tZg0n-9p317rG7nIYiLvrfYkTMyQHMclK1ZejMC5Mnx3LdzVTTRNl7amyfYwg4po-UklmUS1lgubneGegf44wrEkgqyIwgKe9k7ZF9MW_UOIHgcavlT6chw6TTBaAaCXG2dbYl8wyRe_Vn0gJYqtoRKVPAtxt6_sF_dhI6O54VGtfxX0SOchhNegDAuz8ROkmjVtmak8UUA6ABt0_lJI_IZUvj_RgEZaXe8"
        />
      </div>
    </section>
  </header>
</template>

<script setup>
// Vue Router import for navigation
import { RouterLink } from "vue-router"

// oh-vue-icons import for Bootstrap ticket icon
import { OhVueIcon, addIcons } from "oh-vue-icons"
// import { BsTicket } from "oh-vue-icons/icons"

// addIcons(BsTicket)
</script>

<script>
export default {
  components: {
    "v-icon": OhVueIcon,
  },
}
</script>
