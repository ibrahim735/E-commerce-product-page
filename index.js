//mobile view functionality
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const overlayBg = document.querySelector(".overlay-bg");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlayBg.classList.toggle("active");
  document.body.style.overflow = navMenu.classList.contains("active")
    ? "hidden"
    : "auto";
});

overlayBg.addEventListener("click", () => {
  hamburgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
  overlayBg.classList.remove("active");
  document.body.style.overflow = "auto";
});

const navLinks = document.querySelectorAll(".nav-menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
    overlayBg.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

//generic functionality
const cartIcon = document.querySelector(".cart-icon");
const cartModal = document.querySelector(".cart-modal");
const productImage = document.querySelector(".product-main-image");
const thumbnailImage = document.querySelectorAll(".thumbnail-image");
const nextImage = document.querySelector(".next-image-icon-container");
const previousImage = document.querySelector(".previous-image-icon-container");
const decreaseQuantity = document.querySelector(".quantity-decrease");
const increaseQuantity = document.querySelector(".quantity-increase");
const quantityValue = document.querySelector(".quantity-value");
const addToCart = document.querySelector(".add-to-cart-button");

cartIcon.addEventListener("click", () => {
  if (cartModal.style.display === "none" || cartModal.style.display === "") {
    cartModal.style.display = "block";
  } else {
    cartModal.style.display = "none";
  }
});

const images = Array.from(thumbnailImage).map((img) => img.src);

let currentIndex = 0;

function updateImage(index) {
  productImage.src = images[index];
}

nextImage.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(currentIndex);
});

decreaseQuantity.addEventListener("click", () => {
  let currentValue = parseInt(quantityValue.textContent);
  if (currentValue === 0) {
    return;
  } else {
    quantityValue.textContent = currentValue - 1;
  }
});

increaseQuantity.addEventListener("click", () => {
  let currentValue = parseInt(quantityValue.textContent);
  quantityValue.textContent = currentValue + 1;
});

addToCart.addEventListener("click", ()=>{
  
})