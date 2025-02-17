const productSample = document.getElementById("product-sample");
const carouselImages = document.querySelectorAll(".carousel-image");
const count = document.querySelector(".cart-count");
const removeButton = document.querySelector(".minus");
const addButton = document.querySelector(".add");
const addToCart = document.querySelector(".add-to-cart");
const cartIcon = document.querySelector(".nav-cart-icon");
const cartDialog = document.querySelector(".cart-dialogue");
const cartItemsContainer = document.querySelector(".cart-items");
const CheckOutBtn = document.querySelector(".checkout-btn")
const lightBoxDialog = document.querySelector(".lightbox-contaier")
const closeLightBox = document.querySelector(".close-icon")
const cartNumberTag = document.querySelector(".cart-tag")

carouselImages.forEach((img) => {
  img.addEventListener("click", () => {
    productSample.src = img.src;
  });
});


productSample.addEventListener("dblclick", ()=>{
  lightBoxDialog.style.display = "block"
  lightBoxDialog.style.display = "flex";
})

closeLightBox.addEventListener("click", ()=>{
  lightBoxDialog.style.display = "none"
})

removeButton.addEventListener("click", () => {
  let currentCount = parseInt(count.textContent);
  if (currentCount <= 0) {
    return;
  } else {
    count.textContent = currentCount - 1;
  }
});

addButton.addEventListener("click", () => {
  incrementProduct();
  updateCart()
});

const incrementProduct = () =>{
  let currentCount = parseInt(count.textContent);
  count.textContent = currentCount + 1;
}

cartIcon.addEventListener("click", () => {
  cartDialog.classList.toggle("show");
});

//cart functions

let cart = [];

addToCart.addEventListener("click", () => {
  incrementProduct();
  updateCart();
  cartDialog.style.display = "block";

});

function updateCart() {
  let product = {
    name: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: parseInt(count.textContent), 
    image: productSample.src,
  };

  product.total = product.price * product.quantity; 


  let existingProduct = cart.find(item => item.name === product.name);

  if (existingProduct) {

    existingProduct.quantity = product.quantity;
    existingProduct.total = existingProduct.price * existingProduct.quantity;
  } else {
    cart.push(product);
  }


  
  cartItemsContainer.innerHTML = "";

  let totalCartCount = 0;

  cart.forEach((item, index) => {
    totalCartCount = item.quantity;
  
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.setAttribute("data-index", index);

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-details">
        <p>${item.name}</p>
        <p>$${item.price} x ${item.quantity} = <b>$${item.total}</b></p>
      </div>
      <img src="./assets/images/delete.png" class="remove-item" ></img>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  if (totalCartCount > 0) {
    cartNumberTag.style.display = "block";
    cartNumberTag.style.display = "flex";
    cartNumberTag.style.alignItems = "center"
    cartNumberTag.style.justifyContent = "center"
    cartNumberTag.innerHTML = `${totalCartCount}`;
  } else {
    cartNumberTag.style.display = "none";
  }

  if (cart.length > 0) {
    CheckOutBtn.style.display = "block";
  } else {
    CheckOutBtn.style.display = "none";
  }
}

const removeItemFromCart = document.querySelector(".remove-item")

// cartItemsContainer.addEventListener("click", (event) => {
//   if (event.target.classList.contains("remove-item")) {
//     let cartItemElement = event.target.closest(".cart-item"); 
//     let index = cartItemElement.getAttribute("data-index"); 
    
//     cart.splice(index, 1); 
    
//     updateCart(); 
//   }
// });

cartNumberTag.innerHTML = `${product.quantity}`;





