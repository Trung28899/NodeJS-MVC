const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const pathSave = path.join(__dirname, "..", "data", "products.json");
    /*
        Reading the ./data/products.json file
    */
    fs.readFile(pathSave, (err, fileContent) => {
      let products = [];
      if (!err) {
        /*
            JSON take .json data and give us
            back javascript object or array
        */
        products = JSON.parse(fileContent);
      }
      /*
            stringify() takes javascript array / object
            and convert it into JSON format

            add item and rewrite it to the ./data/products.json file
        */
      products.push(this);
      fs.writeFile(pathSave, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callBack) {
    const pathSave = path.join(__dirname, "..", "data", "products.json");
    fs.readFile(pathSave, (err, fileContent) => {
      if (err) {
        // If there is an error > return empty array
        callBack([]);
      }
      /*
        See ./controllers/products.js to see the callBack
        function which is called within

        Product.fetchAll()
        
        this function render the array to 
        the views
      */
      callBack(JSON.parse(fileContent));
    });
  }
};
