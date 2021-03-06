
// VARIABLES
const cartBtn = document.querySelector('.cart-btn')
const closeCartBtn = document.querySelector('.close-cart')
const clearCartBtn = document.querySelector('.clear-cart')
const cartDOM = document.querySelector('.cart')
const cartOverLay = document.querySelector('.cart-overlay')
const cartItems = document.querySelector('.cart-items')
const cartContent = document.querySelector('.cart-content')
const productsDOM = document.querySelector('.products-center')

// cart
let cart = [];

//getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch('products.json');
      let data = await result.json()
    }
    catch(error){
      console.log("Error")
    }
  }
}

//display products
class UI {

}

//local storage
class Storage {

}

// document.addEventListener("DOMContentLoaded", () => {
//   const ui = new UI();
//   const products = new Products();
//   //get all products
//   // products.getProducts().then(products => {
//   //   console.log(products)
//   // })
//   products.getProducts().then(data => console.log(data))
// })

function showCart() {
  cartOverLay.classList.add('transparentBcg')
  cartDOM.classList.add('showCart')
}

function closeCart() {
  cartOverLay.classList.remove('transparentBcg')
  cartDOM.classList.remove('showCart')
}
// .setupAPP() {
//   cart = Storage.getCart();
//   this.setCartValues(cart);
//   this.populate(cart);
//   cartBtn.addEventListener('click', this.showCart)
// }
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });
