<template>
  <section class="w-[75%] mx-auto my-10 md:my-20 flex flex-col gap-6 text-center">
    <h1 class="font-black">Stay Updated with SupportFlow</h1>
    <p>
      Subscribe to our newsletter to get the latest news, updates, and tips
      straight to your inbox.
    </p>

    <form @submit.prevent="handleSubmit" class="flex justify-center">
      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        class="border border-gray-300 rounded-l-lg py-1.5 px-2 w-30 md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        class="bg-blue-500 text-white rounded-r-lg py-1.5 px-2 hover:bg-secondary-dark"
      >
        Subscribe
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");

const handleSubmit = () => {
  if (!email.value) {
    alert("Please enter a valid email address.");
    return;
  }
  alert(`Subscribed successfully with: ${email.value}`);
  email.value = "";
};
</script>
