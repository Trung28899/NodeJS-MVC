/*
    This will be replaced by a real database later
*/
const products = [];

/*
    you can exports anything
    in this demonstration, we're 
    gonna export a class
*/
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  /*
    Make sure we can use classname.fetchAll()
    without static, we can only fetchAll() with 
    a declared object
  */
  static fetchAll() {
    return products;
  }
};
