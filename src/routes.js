
const express = require('express')
const routes = express.Router()

const pages = require('./app/controlls/controlls')

// ROTAS
routes.get('/', pages.layout )
routes.get('/page', pages.page )
routes.get('/doadores', pages.donors )
routes.get('/form', pages.form )
routes.post('/views', pages.post )

module.exports = routes