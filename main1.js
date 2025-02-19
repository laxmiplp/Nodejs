const http = require('http')
const PORT = process.env.PORT || 3101; // Use Render's assigned port or default to 3101

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('Node.js server started\n');
    res.end('Response provided');
})
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
