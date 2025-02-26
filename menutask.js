const http = require('http');
const url = require('url');

const vegMenu = [
    { item: 'Gobi', price: 150 },
    { item: 'Paneer', price: 200 },
    { item: 'Veg Biryani', price: 180 }
];

const nonVegMenu = [
    { item: 'Chicken', price: 250 },
    { item: 'Mutton', price: 350 },
    { item: 'Fish', price: 300 }
];

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname;
    const quantity = parseInt(parsedURL.query.quantity) || 1;

    console.log(`Path: ${path}`);
    console.log(`Quantity: ${quantity}`);

    if (req.method === 'GET') {
        let menuItems = [];

        if (path === '/veg') {
            menuItems = vegMenu.map(item => {
                let totalPrice = item.price * quantity;
                let gst = totalPrice * 0.05;
                return {
                    item: item.item,
                    quantity: quantity,
                    price: item.price.toFixed(2),
                    gst: gst.toFixed(2),
                    total_price: (totalPrice + gst).toFixed(2),
                    message: 'Thank you for ordering the Vegetarian Item'
                };
            });

            res.writeHead(200, 'Veg Menu', { 'Content-Type': 'application/json' });
        }
        else if (path === '/nonveg') {
            menuItems = nonVegMenu.map(item => {
                let totalPrice = item.price * quantity;
                let gst = totalPrice * 0.05;
                return {
                    item: item.item,
                    quantity: quantity,
                    price: item.price.toFixed(2),
                    gst: gst.toFixed(2),
                    total_price: (totalPrice + gst).toFixed(2),
                    message: 'Thank you for ordering the Non-Vegetarian Item'
                };
            });

            res.writeHead(200, 'Non Veg Menu', { 'Content-Type': 'application/json' });
        }
        else {
            res.writeHead(404, 'Menu Item Not Found', { 'Content-Type': 'text/plain' });
            res.write('Menu Item is not listed');
            res.end();
            return;
        }

        res.write(JSON.stringify(menuItems));
        res.end();
    }
    else {
        res.writeHead(405, 'Method Not Allowed', { 'Content-Type': 'text/plain' });
        res.write('Only GET method is allowed');
        res.end();
    }
});

server.listen(3101, () => {
    console.log('Server running on port 3101');
});
