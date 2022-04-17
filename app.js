'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Hello world!\n Renaldi Anggarkusuma\n 52019028\n Jurusan Teknik Informatika')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
