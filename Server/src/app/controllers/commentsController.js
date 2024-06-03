import conexao from "../database/conexao.js";

class commentsController{


    index(req, res) {

        const sql = "select * from coments;"
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
        const sql = "select * from coments WHERE id=?;"
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
        const sql = "INSERT INTO coments SET ?;"
        conexao.query(sql, nome, (erro, result) => {
         if(erro) {
             res.status(404).send("Erro ao adicionar este comentário")
         } else {
             res.status(200).send("Comentário enviado com sucesso!")
         }
        })
     }

    update (req, res) {
        const id = req.params.id
        const nome = req.body
        const sql = "UPDATE coments SET ? WHERE id=?;"
        conexao.query(sql, [nome, id], (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro})
             } else{
                 res.status(201).send(`Comentário ${id} actualizado`)
             }
        })
    }

    delete (req, res) {
        const id = req.params.id
        const sql = "delete from coments WHERE id=?;"
        conexao.query(sql, id, (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro})
             } else{
                 res.status(201).send("Comentário deletado")
             }
        })
     
    }


}

export default new commentsController()