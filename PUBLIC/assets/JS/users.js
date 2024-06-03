document.getElementById('btnadd').addEventListener('click', (e)=>{
    window.location.href ='../mood/mood.html'
})

document.getElementById('btnbusc').addEventListener('click', (e) =>{

    let idU = document.getElementById('texto').value
    //obterProdutos(idCome);

    obterUser(); 

 

})



function obterUser(){
    fetch('http://localhost:3001/usuarios')
    .then(response => response.json())
    .then(data => popularUser(data))
    .catch(error => console.log(error))
}

function popularUser(data){
    for(var i = 0; i < data.length; i++) {
        let tb = document.getElementById('result')
      

        let tr = tb.insertRow();
        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
       
        let td_acao = tr.insertCell();
       

        td_id.innerHTML = data[i].id;
        td_nome.innerHTML = data[i].nome;
        

        td_acao.innerHTML = '<a href="mood/mood.html?id=' + data[i].id + '&operacao=editar"> Editar </a> <a href="mood/mood.html?id=' + data[i].id + '&operacao=excluir"class="ms-4">Excluir</a>' 
       
    }
}

function obterUsers(idU){
    fetch('http://localhost:3001/protudos/' + idU)
    .then(response => response.json())
    .then(data => popularTable(data))
    .catch(error => console.log(error))
}



function popularUsers(data){
    for(var i = 0; i < data.length; i++) {
        let tb = document.getElementById('result')
        tb.innerHTML = '';

        let tr = tb.insertRow();
        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();

        td_id.innerHTML = data[i].id;
        td_nome.innerHTML = data[i].nome;
        console.log(data[i].nome)
    }
}