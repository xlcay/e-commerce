<script setup>
import { useCart } from '~/composables/useCart.js';

// Use the composable to get global cart state and functions
const {
  cartCount,
  totalPrice,
  isCartOpen,
  toggleCart,
  handleCheckout,
  removeItem,
  pricePerUnit,
  productName,
} = useCart();
</script>

<template>
  <!-- Layout Content -->
      <div class="flex justify-between items-center pb-10 md:ml-10 md:mr-10 text-black/50 border-b-2">
        <div class="flex text-center items-center justify-center space-x-10 pt-5 pl-10 md:pl-10">
          <a href="/">
            <img src="/images/logo.svg" alt="Sneakers Logo" />
          </a>
  
          <!-- Navbar Links  -->
          <nav class="hidden md:flex space-x-5">
            
            <a href="#" class="relative group  transition-all duration-300">Collections
              <span class="absolute left-0 right-0 -bottom-14 w-full h-1 bg-orange opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
            <a href="#" class="relative group  transition-all duration-300">Men
              <span class="absolute left-0 right-0 -bottom-14 w-full h-1 bg-orange opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
            <a href="#" class="relative group  transition-all duration-300">Women
              <span class="absolute left-0 right-0 -bottom-14 w-full h-1 bg-orange opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
            <a href="#" class="relative group  transition-all duration-300">About
              <span class="absolute left-0 right-0 -bottom-14 w-full h-1 bg-orange opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
            <a href="#" class="relative group  transition-all duration-300">Contact
              <span class="absolute left-0 right-0 -bottom-14 w-full h-1 bg-orange opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </a>
          </nav>
        </div>
  
        <!-- Cart Section -->
         
  <div class="flex items-center justify-center pt-5 mr-8 md:mr-5 space-x-10 md:space-x-5">
    <div class="relative flex items-center">
      <a href="#" @click.prevent="toggleCart" class="flex items-center">
        <img src="/images/icon-cart.svg" alt="Cart Icon" />
        <div v-if="cartCount > 0 && cartCount <= 10" class="absolute -top-3 -right-3 bg-orange text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {{ cartCount }}
      </div>
      <div v-else-if="cartCount > 10" class="absolute -top-3 -right-3 bg-orange text-white text-xs w-6 h-5 flex items-center justify-center rounded-full">
        10+
      </div>
      </a>

      <!-- Cart Dropdown -->
      <div v-if="isCartOpen" class="absolute top-10 right-0 w-80 h-52 p-6 bg-white shadow-2xl rounded-lg z-10">
        <div v-if="cartCount === 0">
          <h1 class="text-lg font-black text-black border-b border-gray-300 pl-3 pb-4">Cart</h1>
          <p class="flex text-base m-10 justify-center font-normal">Your cart is empty.</p>
        </div>
        <div v-else class="flex flex-col">
          <h1 class="text-lg font-bold">Cart</h1>
          <span class="border-b"></span>
          <div class="flex justify-center m-2 mt-5 gap-2">
            <img class="h-12 rounded-lg" src="/images/image-product-1-thumbnail.jpg">
            <p class="col-span-2 text-sm font-bold">
            {{ productName }} ${{ pricePerUnit }} x {{ cartCount }}  <span class="text-black">${{ totalPrice }}</span>
          </p>
            <button @click="removeItem()"><img class="h-5 items-center " src="/public/images/icon-delete.svg" alt="Delete Icon"/></button>
          </div>
          <button @click="handleCheckout()" class="bg-orange font-bold text-black py-2 px-4 rounded-lg mt-4 w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  
          <!-- Avatar Icon -->
          <a href="#" class="flex items-center hover:outline hover:outline-2 hover:outline-orange/70 rounded-full transition duration-300">
            <img class="w-12 h-12" src="/images/image-avatar.png" alt="User Avatar"/>
          </a>
        </div>
      </div>
  </template>
  
