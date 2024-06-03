//Fazer a conexão
conexao.connect((erro) => {
    if(erro) {
        console.log('A conexão falhou')
    } else{
        console.log('Conexão realizada com sucesso!')
        
    }
})