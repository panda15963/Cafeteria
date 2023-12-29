const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  // Example Express API endpoint
  server.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
  });

  // Handle Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on http://localhost:${port}`);
  });
});
