// composables/useCart.js
import { ref, computed } from 'vue';

// Global State
const cartCount = ref(0);
const productName = ref('Fall Limited Edition Sneakers');
const pricePerUnit = ref(125.00);
const isCartOpen = ref(false);
const quantity = ref(1); // Reactive quantity for selecting current item count

// Computed property for total price
const totalPrice = computed(() => {
  return cartCount.value * pricePerUnit.value; // Compute total based on items in the cart
});

// Functions to manage cart state
function increaseQuantity() {
  quantity.value += 1; // Increment quantity by 1
}

function decreaseQuantity() {
  if (quantity.value > 0) {
    quantity.value -= 1; // Decrement quantity by 1
  }
}

function addToCart() {
  cartCount.value += quantity.value; // Add current quantity to cart count
  quantity.value = 1; // Reset quantity after adding to cart
}

function toggleCart() {
  isCartOpen.value = !isCartOpen.value; // Toggle cart open state
}

function removeItem() {
  cartCount.value = 0; // Reset cart count
}

function handleCheckout() {
  alert('Checkout attempted');
  console.log('Checkout attempted');
}



// Export function to use the cart globally
export function useCart() {
  return {
    cartCount,
    productName,
    pricePerUnit,
    isCartOpen,
    quantity,
    totalPrice,
    toggleCart,
    addToCart,
    removeItem,
    handleCheckout,
    increaseQuantity,
    decreaseQuantity,
  };
}
