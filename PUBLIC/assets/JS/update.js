var operacao = ''
window.addEventListener('load', (e) =>{

    const param = new URLSearchParams(window.location.search);
    const id = parseInt(param.get('id'));
    operacao = param.get("operacao");
    console.log('operacao' + operacao);
    
    if(id > 0)
        obterProduto(id)

})

function obterProduto(id){
    fetch('http://localhost:3001/protudos/' + id)
    .then(response => response.json())
    .then(data => mostrarProd(data))
    .catch(error => console.log(error))
}

function mostrarProd(data) {
   
    document.getElementById('#nome').value = data.nome
    document.getElementById('#preco').value = data.preco
    document.getElementById('#desc').value = data.descricao
    document.getElementById('#localizacao').value = data.localizacao
    document.getElementById('#estado').value = data.estado 

    if(operacao == 'editar')
        document.getElementById('salv').innerHTML = "salvar"
    else{
        document.getElementById('salv').innerHTML = "excluir"
        document.getElementById('#nome').disabled = true,
        document.getElementById('#preco').disabled = true,
        document.getElementById('#desc').disabled =true,
        document.getElementById('#localizacao').disabled = true,
        document.getElementById('#estado').disabled = true
    }   


}



document.getElementById('formpro').addEventListener('submit', (e)=>{
    e.preventDefault();

    let id = document.getElementById('idpd').value;
    if(id == 0 )
            adicionarProduto();
    else if(operacao== 'editar')
            actualizarProduto(id);
        else
            actualizarProduto(id);
})





function adicionarProduto(){
    let myHeaders = new Headers();
    myHeaders.append('content-type', 'application/jsaon');

    const data = {
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('descricao').value,
        preco: document.getElementById('preco').value,
        localizacao: document.getElementById('locate').value,
        state: document.getElementById('state').value

    };

    var options = {
        method: 'put',
        Headers: myHeaders,
        body: JSON.stringify(data)
    }
    fetch('http://localhost:3001/protudos')
    .then(response =>{
        console.log(response.status);
        if(response.status >= 200 && response.status <300){
            console.log('actualizado');
            window.location.href= '../home.html';
        } else 
                alert ('falha ao actualizar');
    })
    
    .catch(error => console.log(error))
}

//função deletar
function deletarProduto(id){
    let myHeaders = new Headers();
    myHeaders.append('content-type', 'application/jsaon');

    var options = {
        method: 'DELETE',
        Headers: myHeaders,
        
    }
    fetch('http://localhost:3001/protudos/' + id + options)
    .then(response =>{
        console.log(response.status);
        if(response.status >= 200 && response.status <300){
            console.log('excluído');
            window.location.href= '../home.html';
        } else 
                alert ('falha ao delectar');
    })
    
    .catch(error => console.log(error))
}


//função actualizar
function actualizarProduto(id){
    let myHeaders = new Headers();
    myHeaders.append('content-type', 'application/jsaon');

    const data = {
        id: id,
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('descricao').value,
        preco: document.getElementById('preco').value,
        localizacao: document.getElementById('locate').value,
        state: document.getElementById('state').value

    };

    var options = {
        method: 'put',
        Headers: myHeaders,
        body: JSON.stringify(data)
    }
    fetch('http://localhost:3001/protudos/' + id + options)
    .then(response =>{
        console.log(response.status);
        if(response.status >= 200 && response.status <300){
            console.log('actualizado');
            window.location.href= '../home.html';
        } else 
                alert ('falha ao actualizar');
    })
    
    .catch(error => console.log(error))
}


