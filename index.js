const express = require('express')
const app = express()
const porta = 3000;

// metódo get precisa do parametro req e res dentro do callbeck

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/segunda-rota', (req, res) => {
    res.send('Segunda Rota!')
})

app.get('/prime-day/:produto', (req, res) => {
   
   req.params;
   res.send(`O produto comprado foi ${req.params.produto}`)
   
    // res.send('Ofertas')
})

app.listen(porta, () => {
    console.log(`O servidor iniciou na porta ${porta}`);

})

