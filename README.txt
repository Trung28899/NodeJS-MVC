I. Tools Used: 

    - $ npm install 
    - $ npm install --save express
    - $ npm install --save body-parser
    - $ npm install --save ejs pug express-handlebars
    - $ npm install --save express-handlebars@3.0

II. Core Concepts: 

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

    
III. Module Notes: 
    1. Using MVC: setting up Controller 
        - Code in 2nd Commit
        - See Controller/products.js and Controller/error.js
            > This is how you set up Controller
        - See app.js for 404 page
        - See routes/admin.js and routes/shop.js 
            for products handling using Controller
            > This is how you import and use Controller
        
IV. Other Notes: 
    