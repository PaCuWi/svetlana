var express = require('express')

var app = express()

app.use(express.static('public'))

app.listen(23489, () => console.log('Server listening on port 23489!'))