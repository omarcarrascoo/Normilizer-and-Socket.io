import { normalize, schema } from "normalizr"
import empresa from "./data.js"
import util from 'util'
import express from "express"
import {Server as HttpServer} from "http"

import {Server as IOServer} from 'socket.io'
// import option from './config'
// const knex = require('knex')(option.sqlite)


const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer (httpServer)

app.use(express.static('public'))
app.get('/', (req, res) =>{
    res.send('hello world')
})
const msj = [
    {author: 'fede', text: 'hola soy fede', date: '2022-04-05 10:00:00'},
    {author: 'fede', text: 'hola soy fede', date: '2022-04-05 10:00:00'},
    {author: 'fede', text: 'hola soy fede', date: '2022-04-05 10:00:00'}
]

httpServer.listen(4000,() =>{
    console.log('listen on port 4000')
})

io.on ('connection', (cliente)=>{
    console.log('Un cliente se conecto')
    cliente.emit('mensajes', msj)

    cliente.on('new-message', mensaje =>{
        msj.push(mensaje)
        io.sockets.emit('mensajes', msj)
    })
})




function print(obj) {
    console.log(util.inspect(obj,false,12,true))
}


const gerenteSchema = new schema.Entity('gerente')
const encargadoSchema = new schema.Entity('encarcado');

const empleadoShchema = new schema.Entity('empleados', {
    gerente: gerenteSchema,
    encargado: encargadoSchema
})

const postsSchema = new schema.Entity('post',{
    gerente: gerenteSchema,
    encargado: encargadoSchema,
    empleados:[ empleadoShchema]
})

const normalizeEmpresa = normalize(empresa, postsSchema)
// print(normalizeEmpresa)