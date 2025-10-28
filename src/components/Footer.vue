<template>
  <footer class="text-white bg-gray-900">
    <div class="px-6 sm:px-10 lg:px-20 py-16">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <!-- Brand Section -->
        <div class="flex flex-col gap-4 max-w-sm text-center md:text-left items-center md:items-start">
          <div class="flex items-center gap-3">
            <div class="size-8">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4 2.88a1.5 1.5 0 0 0-2.88 0L9.6 6H4.5a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3H14.4V2.88ZM4.5 15a1.5 1.5 0 0 0 0 3h5.1l1.92 3.12a1.5 1.5 0 0 0 2.88 0L16.32 18H19.5a1.5 1.5 0 0 0 0-3H4.5Z"
                ></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold tracking-tight">SupportFlow</h2>
          </div>
          <p class="text-white/80">
            The effortless way to manage customer support tickets, so you can
            focus on what matters most: your customers.
          </p>
          <p class="text-sm text-white/60 mt-4">
            © 2023 SupportFlow. All rights reserved.
          </p>
        </div>

        <!-- Links Section -->
        <div class="flex flex-col sm:flex-row gap-10 sm:gap-20 text-center md:text-left">
          <!-- Product -->
          <div class="flex flex-col gap-4">
            <h3 class="font-bold tracking-wide">Product</h3>
            <a class="text-white/80 hover:text-white" href="#">Features</a>
            <a class="text-white/80 hover:text-white" href="#">Pricing</a>
            <a class="text-white/80 hover:text-white" href="#">Integrations</a>
            <a class="text-white/80 hover:text-white" href="#">Updates</a>
          </div>

          <!-- Company -->
          <div class="flex flex-col gap-4">
            <h3 class="font-bold tracking-wide">Company</h3>
            <a class="text-white/80 hover:text-white" href="#">About Us</a>
            <a class="text-white/80 hover:text-white" href="#">Careers</a>
            <a class="text-white/80 hover:text-white" href="#">Contact Us</a>
            <a class="text-white/80 hover:text-white" href="#">Blog</a>
          </div>

          <!-- Support -->
          <div class="flex flex-col gap-4">
            <h3 class="font-bold tracking-wide">Support</h3>
            <a class="text-white/80 hover:text-white" href="#">Help Center</a>
            <a class="text-white/80 hover:text-white" href="#">API Docs</a>
            <a class="text-white/80 hover:text-white" href="#">System Status</a>
            <a class="text-white/80 hover:text-white" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script logic needed — static component
</script>
