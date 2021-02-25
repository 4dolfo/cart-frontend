export function getProducts() {
    return fetch('http://localhost:3000/products')
      .then(data => data.json())
  }