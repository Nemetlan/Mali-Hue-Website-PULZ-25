

function getProducts() {
  return fetch(`${process.env.API_URL}/products`).then(response => response.json());
}

export default getProducts;

export function getProductById(id) {
  return fetch(`${process.env.API_URL}/products/${id}`).then(response => response.json());
}