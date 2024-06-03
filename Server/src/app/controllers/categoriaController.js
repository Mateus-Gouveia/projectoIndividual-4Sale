import conexao from "../database/conexao.js";

class categoriaController{


    index(req, res) {

        const sql = "select * from categorias;"
        conexao.query(sql, (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro })
             } else{
                 res.status(200).json(result)
             }
        })
    }
    
    show(req, res) {
        const id = req.params.id
        const sql = "select * from categorias WHERE id=?;"
        conexao.query(sql, id, (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro})
             } else{
                 res.status(201).json(result)
             }
        })
     }

    store (req, res) {
        const nome = req.body
        const sql = "INSERT INTO categorias SET ?;"
        conexao.query(sql, nome, (erro, result) => {
         if(erro) {
             res.status(404).send("Erro ao adicionar esta categoria")
         } else {
             res.status(200).send("Categorias cadastrada com sucesso!")
         }
        })
     }

    update (req, res) {
        const id = req.params.id
        const nome = req.body
        const sql = "UPDATE categorias SET ? WHERE id=?;"
        conexao.query(sql, [nome, id], (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro})
             } else{
                 res.status(201).send(`Categoria ${id} actualizada`)
             }
        })
    }

    delete (req, res) {
        const id = req.params.id
        const sql = "delete from categorias WHERE id=?;"
        conexao.query(sql, id, (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro})
             } else{
                 res.status(201).send("Categoria deletada")
             }
        })
     
    }


}

export default new categoriaController