<template>
  <section class="grid md:flex gap-5">
    <Toaster position="top-right" />

    <!-- LEFT SECTION -->
    <div class="bg-[#E3E8E7]">
      <div class="w-[75%] mx-auto flex justify-center items-center h-96">
        <div class="text-center">
          <div class="flex items-center gap-4 justify-center mb-3">
            <BsTicket class="text-xl" />
            <h1 class="font-semibold text-lg">SupportFlow</h1>
          </div>
          <h2 class="font-bold text-3xl mb-2">
            Streamline Your Support with SupportFlow
          </h2>
          <p class="text-gray-700">
            Manage customer tickets effortlessly — so you can focus on what
            matters most: your customers.
          </p>
        </div>
      </div>
    </div>

    <!-- RIGHT SECTION -->
    <div class="w-[75%] mx-auto md:w-full flex justify-center items-center h-96">
      <Tabs default-value="login" class="w-fit md:w-full">
        <TabsList class="bg-transparent mx-auto w-72 border-b border-gray-300 rounded-none pb-0 px-0">
          <TabsTrigger
            value="login"
            class="h-9 cursor-pointer data-[state=active]:border-b-2 rounded-none data-[state=active]:border-b-blue-600 data-[state=active]:shadow-none"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="register"
            class="h-9 cursor-pointer data-[state=active]:border-b-2 rounded-none data-[state=active]:border-b-blue-600 data-[state=active]:shadow-none"
          >
            Register
          </TabsTrigger>
        </TabsList>

        <!-- LOGIN FORM -->
        <TabsContent value="login">
          <div class="text-center mb-4">
            <h1 class="text-xl font-semibold">Welcome Back!</h1>
            <p class="text-gray-500">Log in to continue.</p>
          </div>

          <form @submit.prevent="handleLogin" class="max-w-sm mx-auto space-y-3">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <input
                id="email"
                v-model="loginForm.email"
                type="email"
                placeholder="name@example.com"
                class="border border-gray-300 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-900 mb-1">
                Password
              </label>
              <input
                id="password"
                v-model="loginForm.password"
                type="password"
                class="border border-gray-300 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
              />
              <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
            </div>

            <div class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <input id="remember" type="checkbox" class="w-4 h-4 border-gray-300" />
                <label for="remember" class="ml-2 text-sm text-gray-700">Remember me</label>
              </div>
              <RouterLink to="/" class="text-blue-600 text-sm hover:underline">
                Forgot Password?
              </RouterLink>
            </div>

            <Button type="submit" class="w-full bg-blue-700 text-white hover:bg-blue-800">
              Login
            </Button>
          </form>
        </TabsContent>

        <!-- REGISTER FORM -->
        <TabsContent value="register">
          <form @submit.prevent="handleRegister" class="max-w-sm mx-auto space-y-3">
            <div>
              <label for="reg-email" class="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <input
                id="reg-email"
                v-model="registerForm.email"
                type="email"
                placeholder="name@example.com"
                class="border border-gray-300 text-sm rounded-lg w-full p-2.5"
              />
              <p v-if="errors.emailReg" class="text-red-500 text-xs mt-1">{{ errors.emailReg }}</p>
            </div>

            <div>
              <label for="reg-password" class="block text-sm font-medium text-gray-900 mb-1">
                Password
              </label>
              <input
                id="reg-password"
                v-model="registerForm.password"
                type="password"
                class="border border-gray-300 text-sm rounded-lg w-full p-2.5"
              />
              <p v-if="errors.passwordReg" class="text-red-500 text-xs mt-1">{{ errors.passwordReg }}</p>
            </div>

            <div>
              <label for="reg-confirm" class="block text-sm font-medium text-gray-900 mb-1">
                Confirm Password
              </label>
              <input
                id="reg-confirm"
                v-model="registerForm.confirmPassword"
                type="password"
                class="border border-gray-300 text-sm rounded-lg w-full p-2.5"
              />
              <p
                v-if="errors.confirmPassword"
                class="text-red-500 text-xs mt-1"
              >{{ errors.confirmPassword }}</p>
            </div>

            <div class="flex items-start">
              <input
                id="terms"
                v-model="registerForm.terms"
                type="checkbox"
                class="w-4 h-4 border-gray-300 rounded-sm bg-gray-50"
              />
              <label for="terms" class="ml-2 text-sm text-gray-900">
                I agree with the
                <a href="#" class="text-blue-600 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
            <p v-if="errors.terms" class="text-red-500 text-xs mb-3">{{ errors.terms }}</p>

            <Button type="submit" class="w-full bg-blue-700 text-white hover:bg-blue-800">
              Register new account
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "vue-sonner";

const router = useRouter();
const route = useRoute();

// --- Reactive state ---
const loginForm = ref({ email: "", password: "" });
const registerForm = ref({
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
});

const errors = ref({
  email: "",
  password: "",
  emailReg: "",
  passwordReg: "",
  confirmPassword: "",
  terms: "",
});

// --- LOGIN ---
function handleLogin() {
  errors.value = { email: "", password: "", emailReg: "", passwordReg: "", confirmPassword: "", terms: "" };

  if (!loginForm.value.email) errors.value.email = "Email is required";
  if (!loginForm.value.password) errors.value.password = "Password is required";
  if (errors.value.email || errors.value.password) return;

  const storedUser = localStorage.getItem("user");
  if (!storedUser) {
    toast.error("No account found. Please register first.");
    return;
  }

  const user = JSON.parse(storedUser);
  if (
    user.email === loginForm.value.email &&
    user.password === loginForm.value.password
  ) {
    const fakeToken = btoa(`${loginForm.value.email}:${Date.now()}`);
    localStorage.setItem("authToken", fakeToken);
    toast.success("Login successful!");

    setTimeout(() => router.push("/dashboard"), 1000);
  } else {
    toast.error("Invalid email or password!");
  }
}

// --- REGISTER ---
function handleRegister() {
  errors.value = { email: "", password: "", emailReg: "", passwordReg: "", confirmPassword: "", terms: "" };

  if (!registerForm.value.email) errors.value.emailReg = "Email is required";
  if (!registerForm.value.password)
    errors.value.passwordReg = "Password is required";
  if (registerForm.value.password.length < 6)
    errors.value.passwordReg = "Password must be at least 6 characters";
  if (registerForm.value.password !== registerForm.value.confirmPassword)
    errors.value.confirmPassword = "Passwords must match";
  if (!registerForm.value.terms)
    errors.value.terms = "You must accept the terms";

  if (
    errors.value.emailReg ||
    errors.value.passwordReg ||
    errors.value.confirmPassword ||
    errors.value.terms
  )
    return;

  const existingUser = localStorage.getItem("user");
  if (existingUser && JSON.parse(existingUser).email === registerForm.value.email) {
    toast.error("Email already registered!");
    return;
  }

  const newUser = {
    email: registerForm.value.email,
    password: registerForm.value.password,
  };
  localStorage.setItem("user", JSON.stringify(newUser));
  toast.success("Account created successfully!");

  registerForm.value = { email: "", password: "", confirmPassword: "", terms: false };
}
</script>
