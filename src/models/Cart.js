const carts = require('../files/carts.js');

class Cart {
  static create(products=[]) {
    const cart = {
      products,
      timestamp: new Date()
    }
    return carts.create(cart)
  };

  static all() {
    return carts.all()
  };

  static find(id) {
    return carts.find(id)
  };

  static update(id, data) {
    return carts.update(id, data)
  };

  static delete(id) {
    return carts.delete(id)
  };
};

module.exports = Cart