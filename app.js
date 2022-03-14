const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World, Vaishal here! Builde Number 3 with Review Stage Deployed..!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
