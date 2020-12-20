const {urlencoded} = require('express')

const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('../src/routes')


const server = express()


server.set('view engine', 'njk')
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

nunjucks.configure( 'src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(1000, ()=>{
    console.log('server run')
})