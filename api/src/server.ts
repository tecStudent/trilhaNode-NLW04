import express, { request, response } from 'express'

const app = express()

/** 
 * GET => Buscar 
 * POST => Salvar
 * PUT => Altera
 * DELETE => Deletar
 * PACTH => Alteração especifica
*/

app.get("/", (request, response) =>{
    return response.json({ message: "Hello Word!" })
})

// 1 parametro = (Rotas, Recursos APi)
// 2 parametro = request, response

app.post("/", (request,response) =>{
    // Ja recebeu o dado 
    return response.json({ message: "Cadastrado com sucesso!" })
})


app.listen(3000, () => console.log("Server is running!"))