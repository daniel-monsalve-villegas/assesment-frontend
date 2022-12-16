const API_URL = process.env.REACT_APP_API_URL;

export default async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  const products = await response.json();
  return products;
}

export async function getProductById(id) {
  const response = await fetch(`${API_URL}/products/${id}`);
  const products = await response.json();
  return products;
}
