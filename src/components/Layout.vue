<template>
  <section>
    <RouterView />
  </section>
  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import Footer from "./Footer.vue";
</script>
