import { createStore } from "vuex";
//funzione che metta in localstorage il carrello
function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: [], //sara un array
    selectedProduct: [],
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.name === product.name); // se cè un id che è unguale all id di un prodotto lo aggiungi alla quantita se no nulla
      if (item) return item.quantity;
      else return null;
    },
    cartItems: (state) => {
      return state.cart;
    },
    cartTotalDiscount: (state, getters) => {
      const total = state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
      //sconto 10% 3+ products
      if (getters.cartTotalQuantity > 3) return total - (total * 10) / 100;
      else return total;
    },
    cartTotal: (state) => {
      return state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    },
    cartTotalQuantity: (state) => {
      return state.cart.reduce((a, b) => a + b.quantity, 0);
    },
    selectedItem: (state) => {
      return state.selectedProduct;
    },
  },
  mutations: {
    addToCart(state, product) {
      let item = state.cart.find((i) => i.name === product.name); //ceck sempre per id

      if (item) {
        item.quantity++; // se l idem cè aggiungi 1 alla quanitita
      } else {
        state.cart.push({ ...product, quantity: 1 }); //se invece non cè nel cart lo metti dentro e setti 1 come quantitò perche ne aggiungiamo 1
      }

      updateLocalStorage(state.cart);
    },
    removeFromCart(state, product) {
      let item = state.cart.find((i) => i.name === product.name);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.name !== product.name);
        }
      }
      updateLocalStorage(state.cart);
    },
    deleteFromCart(state, product) {
      let item = state.cart.indexOf(product);

      state.cart.splice(item, 1);

      updateLocalStorage(state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
    save(state, product) {
      if (state.selectedProduct.length > 0) {
        state.selectedProduct.shift();
      }
      state.selectedProduct.push(product);
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProduct)
      );
    },
    updateDetails(state) {
      const details = localStorage.getItem("seletedProduct");
      if (details) {
        state.selectedProduct = JSON.parse(details);
      }
      console.log("updateDetails");
    },
    removeCart(state) {
      let item = state.cart;
      item.length = 0;
      updateLocalStorage(state.cart);
    },
  },
  actions: {},
  modules: {},
});
