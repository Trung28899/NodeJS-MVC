## I. Tools Used:

    - $ npm install
    - $ npm install --save express
    - $ npm install --save body-parser
    - $ npm install --save ejs pug express-handlebars
    - $ npm install --save express-handlebars@3.0

## II. Core Concepts:

    1. What does MVC means:
        - MVC stands for Model, View and Controller

        - MVC is a software pattern that divides code logic
        into 3 parts Modal, Views and Controller:
            +, Models: Working with your data (save data, fetch,
               requests, etc.)
            +, Views: What the users see (html templates, html, etc.)
            +, Controller: Connecting you Models and your Views,
               Contains the  "in-between" logic

        (See imgage for demonstration here:
            https://drive.google.com/file/d/13Rsy-0xOPpsOROqiXRsRe569k7ujFrJH/view?usp=sharing
            https://drive.google.com/file/d/1DnyI2alhKEDfQvrXJEjiUvFy9PJq8enE/view?usp=sharing
        )

## III. Module Notes:

    1. Setting up Controller:
        - Code in 2nd Commit
        - See controller/products.js and controller/error.js
            > This is how you set up Controller
        - See app.js for 404 page
        - See routes/admin.js and routes/shop.js
            for products handling using Controller
            > This is how you import and use Controller

    2. Setting up Models:
        - Code in 3rd Commit
        - See models/product.js to see how to
        export a models
        - See controller/products.js to see how
        to import and use the models

    3. Storing and Fetching data from files via the Model:
        - Code in 4th Commit

        - See ./models/product.js:

            +, Under save() to see how to Store data
               from file via the Models

            +, Under fetchAll() to see how to fetch data
               from file via the models
                > see ./controllers/products.js for
                   callBack()

    4. Refactoring code in ./models/products.js:
        - Code in 5th Commit
        - See code in ./models/products.js
