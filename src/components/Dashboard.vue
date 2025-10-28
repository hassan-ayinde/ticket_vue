<template>
  <section>
    <!-- Header -->
    <header class="mb-6 bg-gray-100 p-6 rounded-md">
      <div class="w-[75%] mx-auto md:flex items-center justify-between">
        <h1>Ticket Dashboard</h1>
        <nav class="flex gap-5">
          <RouterLink
            to="/ticketportal"
            class="bg-gray-700 text-white px-5 py-2 rounded-md"
          >
            Ticket Management Portal
          </RouterLink>

          <RouterLink
            to="/"
            class="bg-gray-700 text-white px-5 py-2 rounded-md"
          >
            Logout
          </RouterLink>
        </nav>
      </div>
    </header>

    <!-- Ticket Stats -->
    <div class="grid md:grid-cols-3 w-[75%] mx-auto gap-6 mb-6">
      <div class="bg-[#F5F5F5] px-3 py-5 rounded-md">
        <h2>Total Tickets</h2>
        <p class="font-black">1,238</p>
      </div>
      <div class="bg-[#FEF6E9] px-3 py-5 rounded-md">
        <h2>Open Tickets</h2>
        <p class="font-black">238</p>
      </div>
      <div class="bg-[#F2FBE8] px-3 py-5 rounded-md">
        <h2>Resolved Tickets</h2>
        <p class="font-black">738</p>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid md:grid-cols-2 md:w-[75%] mx-auto">
      <div class="p-6">
        <TicketVolume />
      </div>
      <div class="p-6">
        <TicketsByStatus />
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import TicketVolume from "./TicketVolume.vue";
import TicketsByStatus from "./TicketByStatus.vue";
</script>
