//Creates and imported express
const express = require('express');
const app = express();
//for incoming request
const bodyParser = require('body-parser');
const cors = require('cors');
//The port number
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
//links the menu html file to the page 
app.get('/Menu.html', (req, res) => {
    res.sendFile(__dirname + '/Menu.html');
});
app.post('/process-order', (req, res) => {
    const { burger, pizza, salad, orangeChicken, thaiNoodles, choleBhature } = req.body;
    //If the condition is true it will take on the price listed in menu, if false the OR operator (:) will use 0
    const burgerPrice = burger ? parseInt(burger) * 10 : 0;
    const saladPrice = salad ? parseInt(salad) * 8 : 0;
    const pizzaPrice = pizza ? parseInt(pizza) * 12 : 0;
    const orangeChickenPrice = orangeChicken ? parseInt(orangeChicken) * 10 : 0;
    const thaiNoodlesPrice = thaiNoodles ? parseInt(thaiNoodles) * 10 : 0;
    const choleBhaturePrice = choleBhature ? parseInt(choleBhature) * 13 : 0;
    const totalAmount = burgerPrice + pizzaPrice + saladPrice + orangeChickenPrice + thaiNoodlesPrice + choleBhaturePrice;
    res.redirect('/result');
});

//Request results
app.get('/result', (req, res) => {
    const result = "Your order has been processed successfully."; // Define result
    res.send(`
        <html>
            <head><title>Orders</title></head>
            <body>
                <h1>${result}</h1>
            </body>
        </html>
    `);
});

//starts the express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});