// Datos iniciales de usuarios
const users = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
    { id: 2, username: 'user', password: 'user123', role: 'user' }
  ];
  
  // Datos iniciales de productos
  let products = [
    { id: 1, name: 'Producto 1', price: 10.99, description: 'Descripción 1' },
    { id: 2, name: 'Producto 2', price: 20.99, description: 'Descripción 2' }
  ];
  
  // Funciones para simular una API
  export const fakeAuth = {
    login(username, password) {
      return new Promise((resolve, reject) => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          setTimeout(() => resolve(user), 500); // Simula tiempo de respuesta
        } else {
          setTimeout(() => reject(new Error('Credenciales inválidas')), 500);
        }
      });
    },
    logout() {
      return new Promise(resolve => {
        setTimeout(resolve, 500);
      });
    }
  };
  
  export const productApi = {
    getProducts() {
      return new Promise(resolve => {
        setTimeout(() => resolve([...products]), 500);
      });
    },
    addProduct(product) {
      return new Promise(resolve => {
        const newProduct = { ...product, id: products.length + 1 };
        products.push(newProduct);
        setTimeout(() => resolve(newProduct), 500);
      });
    },
    updateProduct(id, updates) {
      return new Promise(resolve => {
        const index = products.findIndex(p => p.id === id);
        products[index] = { ...products[index], ...updates };
        setTimeout(() => resolve(products[index]), 500);
      });
    },
    deleteProduct(id) {
      return new Promise(resolve => {
        products = products.filter(p => p.id !== id);
        setTimeout(() => resolve(), 500);
      });
    }
  };