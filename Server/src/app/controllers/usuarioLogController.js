import conexao from "../database/conexao.js";

class usuarioLoginController{

    store(req, res) {
        const {numero, senha} = req.body
        let sql = `select * from users where numero=${numero} and senha='${senha}'`
        conexao.query(sql, (erro, result) => {
             if(erro) {
                return res.status(404).json({message:"ERROR"})
             } else{
                if(result.length>0){
                    res.json({message:result})
                }else{
                    res.json({message:"NOT EXISTS"})
                }
             }
        })
    }
    

    

}

export default new usuarioLoginController()