import conexao from "../database/conexao.js"
class produtosController {

    index(req, res) {

        const sql = "select * from vender;"
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
        const sql = "select * from vender WHERE id=?;"
        conexao.query(sql, id, (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro})
             } else{
                 res.status(200).json(result)
             }
        })
     }

    store (req, res) {
        const nome = req.body
        const sql = "INSERT INTO vender SET ?;"
        conexao.query(sql, nome, (erro, result) => {
         if(erro) {
             res.status(404).send("Erro ao adicionar produto")
         } else {
             res.status(201).send("Produto cadastrado com sucesso!")
         }
        })
     }

    update (req, res) {
        const id = req.params.id
        const nome = req.body
        const sql = "UPDATE vender SET ? WHERE id=?;"
        conexao.query(sql, [nome, id], (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro})
             } else{
                 res.status(201).send(`Dados de produto ${id} actualizados`)
             }
        })
    }

    delete (req, res) {
        const id = req.params.id
        const sql = "delete from vender WHERE id=?;"
        conexao.query(sql, id, (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro})
             } else{
                 res.status(201).send("Produto deletado")
             }
        })
     
    }
}


export default new produtosController()