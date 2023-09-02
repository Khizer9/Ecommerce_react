import axios from "axios";

export const ProductApi = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products")
      console.log(response, "res");
      return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
};
