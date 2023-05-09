const express = require('express');
const app = express();
const PORT = 4000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost: ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('This is my API running...')
})

app.get('/about', (req, res) => {
    res.send('This is my about route')
})

module.exports = app;