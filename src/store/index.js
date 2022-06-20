import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function checkItem(state, product) {
  const item = state.cart.find((i) => i.name === product.name);
  return item;
}
export default createStore({
  state: {
    cart: [],
    selectedProduct: [],
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = checkItem(state, product);
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
    cartTotalPrice: (state) => {
      return state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    },
    cartTotalQuantity: (state) => {
      return state.cart.reduce((a, b) => a + b.quantity, 0);
    },
    selectedItem: (state) => {
      return state.selectedProduct;
    },
    loadDetails() {
      return JSON.parse(localStorage.getItem("selectedProduct"));
    },
  },
  mutations: {
    addQuantity(state, product) {
      const item = checkItem(state, product);

      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      updateLocalStorage(state.cart);
    },
    removeQuantity(state, product) {
      const item = checkItem(state, product);

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
    saveProduct(state, product) {
      if (state.selectedProduct.length > 0) {
        state.selectedProduct.shift();
      }
      state.selectedProduct.push(product);
      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(state.selectedProduct)
      );
    },
    removeAllCart(state) {
      let item = state.cart;
      item.length = 0;
      updateLocalStorage(state.cart);
    },
  },
  actions: {},
  modules: {},
});
