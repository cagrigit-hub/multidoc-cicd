const express = require('express');

const app = express();

app.get('/backend', (req, res) => {
    res.send('Hello from backend! Çağrı CD');
});

app.listen(8080, () => console.log('Listening on port 8080!'));
