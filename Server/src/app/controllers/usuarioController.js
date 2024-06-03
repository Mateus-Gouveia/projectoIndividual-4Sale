import conexao from "../database/conexao.js"
class usuarioController {

    index(req, res) {

        const sql = "select * from users;"
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
        const sql = "select * from users WHERE id=?;"
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
        const sql = "INSERT INTO users SET ?;"
        conexao.query(sql, nome, (erro, result) => {
         if(erro) {
            res.status(404).json({message:"Erro ao adicionar usuário"})
         } else {
            res.status(200).json({message:"usuário cadastrado com sucesso!"})
         }
        })
     }

    update (req, res) {
        const id = req.params.id
        const nome = req.body
        const sql = "UPDATE users SET ? WHERE id=?;"
        conexao.query(sql, [nome, id], (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro})
             } else{
                 res.status(201).send(`Dados do usuário ${id} actualizados`)
             }
        })
    }

    delete (req, res) {
        const id = req.params.id
        const sql = "delete from users WHERE id=?;"
        conexao.query(sql, id, (erro, result) => {
             if(erro) {
                 res.status(404).json({'erro': erro})
             } else{
                 res.status(201).send("Usuário deletado")
             }
        })
     
    }
}


export default new usuarioController()