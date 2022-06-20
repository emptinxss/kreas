import API from "./API";
import { ref } from "@vue/reactivity";

const getProducts = () => {
  const items = ref(null);
  const error = ref(null);

  const loadProducts = async () => {
    try {
      const response = await API().get();
      items.value = response.data;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { items, error, loadProducts };
};

export default getProducts;
