require('./config/config')

const express = require('express')
const app = express()


const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/usuario', (req, res) => {
    res.json('getUsuario')
})
app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Nombre needed'
        });
    } else
        res.json(body)
})
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json('putUsuario')
})
app.delete('/usuario', (req, res) => {
    res.json('deleteUsuario')
})

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
})