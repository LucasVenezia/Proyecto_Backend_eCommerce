const products = require('../files/products.js');

class Product {
  static create(name, description, code, image, price, stock) {
    const item = {
      name,
      description,
      code,
      image,
      price,
      stock,
      timestamp: new Date()
    }
    return products.create(item)
  };

  static all() {
    return products.all()
  };

  static find(id) {
    return products.find(id)
  };

  static update(id, data) {
    return products.update(id, data)
  };

  static delete(id) {
    return products.delete(id)
  };
};

module.exports = Product