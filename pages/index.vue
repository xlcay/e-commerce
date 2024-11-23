

<template>
  <!-- Main Grid Container -->
  <div class="grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-20">
    
    <!-- Product Image and Thumbnails Container -->
    <div class="flex flex-col items-center space-y-6 lg:space-y-10">
      <!-- Main Product Image -->
      <div @click="changeImage('/images/image-product-1.jpg')" class="w-full max-w-md">
        <a href="#">
          <img class="rounded-lg w-full object-cover" src="/images/image-product-1.jpg" alt="Sneaker">
        </a>
      </div>

      
      <!-- Thumbnails Section -->
      <div class="grid grid-cols-4 gap-3 md:gap-6 w-full max-w-md">
        <a href="#" @click.prevent="changeImage('/images/image-product-1.jpg')" class="group">
          <div class="relative rounded-lg w-full h-20 overflow-hidden border-2 border-transparent group-focus:border-orange group-hover:border-solid">
            <img class="rounded-lg w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-300 ease-in-out" src="/images/image-product-1-thumbnail.jpg" alt="Sneaker Thumbnail">
          </div>
        </a>
        <a href="#" class="group" @click.prevent="changeImage('/images/image-product-2.jpg')">
          <div class="relative rounded-lg w-full h-20 overflow-hidden border-2 border-transparent group-focus:border-orange group-hover:border-solid">
            <img class="rounded-lg w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-300 ease-in-out" src="/images/image-product-2-thumbnail.jpg" alt="Sneaker Thumbnail">
          </div>
        </a>
        <a href="#" class="group" @click.prevent="changeImage('/images/image-product-3.jpg')">
          <div class="relative rounded-lg w-full h-20 overflow-hidden border-2 border-transparent group-focus:border-orange group-hover:border-solid">
            <img class="rounded-lg w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-300 ease-in-out" src="/images/image-product-3-thumbnail.jpg" alt="Sneaker Thumbnail">
          </div>
        </a>
        <a href="#" class="group" @click.prevent="changeImage('/images/image-product-4.jpg')">
          <div class="relative rounded-lg w-full h-20 overflow-hidden border-2 border-transparent group-focus:border-orange group-hover:border-solid">
            <img class="rounded-lg w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-300 ease-in-out" src="/images/image-product-4-thumbnail.jpg" alt="Sneaker Thumbnail">
          </div>
        </a>
      </div>
    </div>

    <!-- Second Grid Section: Product Information -->
    <div class="flex flex-col space-y-6 lg:space-y-10 w-full max-w-lg">
      
      <!-- Product Details -->
      <div class="flex flex-col justify-center mt-10 lg:mt-0 space-y-3">
        <h2 class="text-black/50 font-bold text-sm">SNEAKER COMPANY</h2>
        <h1 id="productName" class="font-bold text-2xl md:text-3xl">Fall Limited Edition Sneakers</h1>
        <p class="text-black/50 text-sm md:text-base">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
      </div>

      <!-- Price Section -->
      <div class="flex flex-col space-y-2">
        <div class="flex items-center gap-3">
          <span class="font-bold text-2xl md:text-3xl">$125.00</span>
          <div class="bg-black text-center w-12 h-6 text-white rounded-md flex items-center justify-center">
            <span>50%</span>
          </div>
        </div>
        <span class="line-through text-black/50 font-bold text-base md:text-lg">$250.00</span>
      </div>

      <!-- Quantity and Cart Section -->
      <div class="flex justify-between flex-col md:flex-row items-start md:items-center md:space-y-0 md:space-x-4 w-full p-4 md:p-8">

<!-- Quantity Selector -->
<div class="flex items-center bg-light-grayish-blue w-full md:w-auto h-12 rounded-xl justify-between p-2 md:p-4 flex-grow flex-basis-[45%] md:flex-1">
  <button @click="decreaseQuantity" class="hover:opacity-70 mx-2 md:mx-4">
    <img src="/public/images/icon-minus.svg" alt="Decrease Quantity" />
  </button>
  <span id="cartCount" class="font-bold">{{ quantity }}</span>
  <button @click="increaseQuantity" class="hover:opacity-70 mx-2 md:mx-4">
    <img src="/images/icon-plus.svg" alt="Increase Quantity" />
  </button>
</div>

<!-- Add to Cart Button -->
<button @click="addToCart" class="flex items-center justify-center w-full md:w-auto bg-orange hover:bg-orange/50 text-black font-bold py-3 px-5 rounded-lg space-x-3 transition-all duration-300 flex-grow flex-basis-[55%] md:flex-2">
  <img class="w-5 h-5" src="/images/icon-cart.svg" alt="Cart icon">
  <span>Add to cart</span>
</button>

</div>
    </div> 
  </div>




  <!-- Lightbox -->
      
  <div v-if="isLightboxOpen" id="lightbox" class="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center p-5">
    <div class="relative flex flex-col items-center max-w-xl">
      <img :src="mainImageSrc" class="rounded-lg max-w-full" alt="Sneaker">

      <!-- Close -->
      <span class="absolute -top-10 right-0 cursor-pointer" @click="closeLightbox">
        <img src="/images/icon-close.svg" class="w-4 invert brightness-0" alt="Close Lightbox">
      </span>

      <!-- Previous -->
      <span class="absolute -left-7 border-2 p-4 rounded-full bg-white top-64 cursor-pointer" @click="previousImage">
        <img src="/images/icon-previous.svg" alt="Previous Image">
      </span>

      <!-- next -->
      <span class="absolute -right-7 border-2 p-4 rounded-full bg-white top-64 cursor-pointer" @click="nextImage">
        <img src="/images/icon-next.svg" alt="Next Image">
      </span>

      <!-- kucuk fotolar -->
      <div class="grid grid-cols-4 gap-3 md:gap-6 w-full max-w-md mt-5">
        <a href="#" class="group" @click.prevent="changeImage('/images/image-product-1.jpg')">
          <div class="relative rounded-lg w-full h-20 overflow-hidden bg-white border-transparent group-focus:border-orange group-focus:border-2 group-hover:border-solid">
            <img class="rounded-lg w-full h-full object-fill group-hover:opacity-50 transition-opacity duration-300 ease-in-out" src="/images/image-product-1-thumbnail.jpg" alt="Sneaker Thumbnail">
          </div>
        </a>
        <a href="#" class="group" @click.prevent="changeImage('/images/image-product-2.jpg')">
          <div class="relative rounded-lg w-full h-20 overflow-hidden bg-white border-transparent group-focus:border-orange group-focus:border-2 group-hover:border-solid">
            <img class="rounded-lg w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300 ease-in-out" src="/images/image-product-2-thumbnail.jpg" alt="Sneaker Thumbnail">
          </div>
        </a>
        <a href="#" class="group" @click.prevent="changeImage('/images/image-product-3.jpg')">
          <div class="relative rounded-lg w-full h-20 overflow-hidden bg-white border-transparent group-focus:border-orange group-focus:border-2 group-hover:border-solid">
            <img class="rounded-lg w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300 ease-in-out" src="/images/image-product-2-thumbnail.jpg" alt="Sneaker Thumbnail">
          </div>
        </a>
        <a href="#" class="group" @click.prevent="changeImage('/images/image-product-4.jpg')">
          <div class="relative rounded-lg w-full h-20 overflow-hidden bg-white border-transparent group-focus:border-orange group-focus:border-2 group-hover:border-solid">
            <img class="rounded-lg w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300 ease-in-out" src="/images/image-product-2-thumbnail.jpg" alt="Sneaker Thumbnail">
          </div>
        </a>
      </div>
    </div>
  </div>



</template>

<script setup>
import { useCart } from '~/composables/useCart.js';

const {
  quantity,
  increaseQuantity,
  decreaseQuantity,
  addToCart,
} = useCart();

const isLightboxOpen = ref(false);
const mainImageSrc = ref('/images/image-product-1.jpg');


function closeLightbox() {
  isLightboxOpen.value = false;
  removeEscapeListener();
}

function changeImage(newSrc) {
  isLightboxOpen.value = true;
  mainImageSrc.value = newSrc;
  addEscapeListener();
}



// AI gen
const thumbnails = ref([
  {
    mainSrc: '/images/image-product-1.jpg',
    thumbSrc: '/images/image-product-1-thumbnail.jpg',
  },
  {
    mainSrc: '/images/image-product-2.jpg',
    thumbSrc: '/images/image-product-2-thumbnail.jpg',
  },
  {
    mainSrc: '/images/image-product-3.jpg',
    thumbSrc: '/images/image-product-3-thumbnail.jpg',
  },
  {
    mainSrc: '/images/image-product-4.jpg',
    thumbSrc: '/images/image-product-4-thumbnail.jpg',
  },
]);

function nextImage() {

  const currentIndex = thumbnails.value.findIndex(thumb => thumb.mainSrc === mainImageSrc.value);
  const nextIndex = (currentIndex + 1) % thumbnails.value.length;
  mainImageSrc.value = thumbnails.value[nextIndex].mainSrc;
}

function previousImage() {

  const currentIndex = thumbnails.value.findIndex(thumb => thumb.mainSrc === mainImageSrc.value);
  const prevIndex = (currentIndex - 1 + thumbnails.value.length) % thumbnails.value.length;
  mainImageSrc.value = thumbnails.value[prevIndex].mainSrc;
}

function addEscapeListener() {
  document.addEventListener('keydown', handleEscapeKey);
}

function removeEscapeListener() {
  document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeLightbox();
  }
}

// Cleanup on component unmount
onBeforeUnmount(() => {
  removeEscapeListener();
});

</script>