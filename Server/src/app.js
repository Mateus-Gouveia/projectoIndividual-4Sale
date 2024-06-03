import express from 'express'

import usuarioController from './app/controllers/usuarioController.js'

import produtosController from './app/controllers/produtosController.js'

import categoriaController from './app/controllers/categoriaController.js'

import loginController from './app/controllers/usuarioLogController.js'

import commentsController from './app/controllers/commentsController.js'

import cors from "cors"
// import usuarioLoginController from './app/controllers/usuarioLoginController.js'
const app = express()

//Ler body json
app.use(express.json())
app.use(cors())


app.post('/users', loginController.store)

//Rotas usuários
app.get('/usuarios', usuarioController.index)
app.get('/usuarios/:id', usuarioController.show)
app.post('/usuarios', usuarioController.store)
app.put('/usuarios/:id', usuarioController.update)
app.delete('/usuarios/:id', usuarioController.delete)

//Rotas Vendas
app.get('/protudos', produtosController.index)
app.get('/protudos/:id', produtosController.show)
app.post('/protudos', produtosController.store)
app.put('/protudos/:id', produtosController.update)
app.delete('/protudos/:id', produtosController.delete)

//Rotas Categorias
app.get('/cat', categoriaController.index)
app.get('/cate/:id', categoriaController.show)
app.post('/cat', categoriaController.store)
app.put('/cat/:id', categoriaController.update)
app.delete('/cat/:id', categoriaController.delete)

//Rotas comentários
app.get('/come', commentsController.index)
app.get('/come/:id', commentsController.show)
app.post('/come', commentsController.store)
app.put('/come/:id', commentsController.update)
app.delete('/come/:id', commentsController.delete)


export default app
