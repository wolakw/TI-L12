const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Witaj świecie!');
});

app.get('/api/lista', (reg ,res) => {
    res.send([1, 2, 3, 4]);
});

app.get('/api/lista/:rok/:miesiac', (reg, res) => {
    res.send(req.params);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Oczekuje na porcie ${port}...`))