const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true)
    if (req.method == 'GET') {

        if (parsedURL.pathname == '/menu') {
            if (parsedURL.query.item == 'menu') {

                res.writeHead(200, 'Food Menu', { 'content-type': 'application/json' })
                res.write(JSON.stringify({
                    veg: [
                        { item: 'Gobi', price: parsedURL.query.quantity * 150, message: 'Thank you for ordering the Veg Item' },
                        { item: 'Paneer', price: parsedURL.query.quantity * 200, message: 'Thank you for ordering the Veg Item' },
                        { item: 'Veg Biryani', price: parsedURL.query.quantity * 180, message: 'Thank you for ordering the Veg Item' }
                    ]
                    , nonveg: [
                        { item: 'Chicken', price: parsedURL.query.quantity * 250, message: 'Thank you for ordering the NonVeg Item' },
                        { item: 'Mutton', price: parsedURL.query.quantity * 350, message: 'Thank you for ordering the NonVeg Item' },
                        { item: 'Fish', price: parsedURL.query.quantity * 300, message: 'Thank you for ordering the NonVeg Item' }
                    ]
                }
                ))
                res.end('message: Thank you for ordering the Item')
            }
        }
        else if (parsedURL.pathname == '/menu/veg') {
            if (parsedURL.query.item == 'panner') {
                res.writeHead(200, 'Panner', { 'content-type': 'application/json' })
                res.write(JSON.stringify({
                    veg: [
                        { item: 'Panner', price: parsedURL.query.quantity * 150, message: 'Thank you for ordering the Panner Item' }

                    ]

                }))
                res.end('message: Thank you for ordering the Panner Item')

            }
            if (parsedURL.query.item == 'veg Biryani') {
                res.writeHead(200, 'Veg Biryani', { 'content-type': 'application/json' })
                res.write(JSON.stringify({
                    veg: [

                        {
                            item: 'Veg Biryani', price: parsedURL.query.quantity * 180, message: 'Thank you for ordering the Veg Biryani Item'
                        }
                    ]

                }))
                res.end('message: Thank you for ordering the Veg Biryani Item')

            }
            if (parsedURL.query.item == 'gobi') {
                res.writeHead(200, 'Gobi', { 'content-type': 'application/json' })
                res.write(JSON.stringify({
                    veg: [
                        { item: 'Gobi', price: parsedURL.query.quantity * 250, message: 'Thank you for ordering the Gobi Item' }

                    ]

                }))
                res.end('message: Thank you for ordering the Gobi Item')

            }
            res.writeHead(200, 'Vegetarian Menu', { 'content-type': 'application/json' })
            res.write(JSON.stringify({
                veg: [
                    { item: 'Gobi', price: parsedURL.query.quantity * 150, message: 'Thank you for ordering the Vegetarian Item' },
                    {
                        item: 'Paneer', price: parsedURL.query.quantity * 200, message: 'Thank you for ordering the Vegetarian Item'
                    },
                    {
                        item: 'Veg Biryani', price: parsedURL.query.quantity * 180, message: 'Thank you for ordering the Vegetarian Item'
                    }
                ]

            }))
            res.end('message: Thank you for ordering the Vegetarian Item')
        } else if (parsedURL.pathname == '/menu/nonveg') {
            if (parsedURL.query.item == 'chicken') {
                res.writeHead(200, 'Chicken', { 'content-type': 'application/json' })
                res.write(JSON.stringify({
                    veg: [
                        { item: 'Chicken', price: parsedURL.query.quantity * 150, message: 'Thank you for ordering the Chicken Item' }

                    ]

                }))
                res.end('message: Thank you for ordering the Chicken Item')

            }
            if (parsedURL.query.item == 'mutton') {
                res.writeHead(200, 'Mutton', { 'content-type': 'application/json' })
                res.write(JSON.stringify({
                    veg: [

                        {
                            item: 'Mutton', price: parsedURL.query.quantity * 180, message: 'Thank you for ordering the Mutton Item'
                        }
                    ]

                }))
                res.end('message: Thank you for ordering the Mutton Item')

            }
            if (parsedURL.query.item == 'fish') {
                res.writeHead(200, 'Fish', { 'content-type': 'application/json' })
                res.write(JSON.stringify({
                    veg: [
                        { item: 'Fish', price: parsedURL.query.quantity * 250, message: 'Thank you for ordering the Fish Item' }

                    ]

                }))
                res.end('message: Thank you for ordering the Fish Item')

            }

            res.writeHead(200, 'Non-Vegetarian Menu', { 'content-type': 'application/json' })
            res.write(JSON.stringify({
                nonveg: [
                    {
                        item: 'Chicken', price: parsedURL.query.quantity * 250, message: 'Thank you for ordering the Non-Vegetarian Item'
                    },
                    {
                        item: 'Mutton', price: parsedURL.query.quantity * 350, message: 'Thank you for ordering the Non-Vegetarian Item'
                    },
                    {
                        item: 'Fish', price: parsedURL.query.quantity * 300, message: 'Thank you for ordering the Non-Vegetarian Item'
                    }
                ]

            }))
            res.end('message: Thank you for ordering the Non-Vegetarian Item')
        } else {

        }
    } else {
        res.writeHead(404, 'Item Not Found', { 'content-type': 'text/plain' })
        res.end('Item unavailable')
    }
})
server.listen(3101, () => {
    console.log('server provider')
})