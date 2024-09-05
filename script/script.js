const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const closeBtn = document.getElementById("close-modal-btn");
const checkoutBtn = document.getElementById("checkout-modal-btn");
const cartCounter = document.getElementById("cart-count");
const adressInput = document.getElementById("adresse");
const adressWarn = document.getElementById("adresse-warn");

const productDetail = document.getElementById("detail");
const products = document.querySelectorAll(".product");

let cart = [];