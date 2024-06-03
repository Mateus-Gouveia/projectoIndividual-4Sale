document.getElementById('btnad').addEventListener('click', (e)=>{
    window.location.href ='mood/mood.html'
})

document.getElementById('btnbuscar').addEventListener('click', (e) =>{

    //let idCome = document.getElementById('texto').value
    //obterProdutos(idCome);

    obterPro(); 

 

})



function obterPro(){
    fetch('http://localhost:3001/protudos')
    .then(response => response.json())
    .then(data => popularPro(data))
    .catch(error => console.log(error))
}

function popularPro(data){
    for(var i = 0; i < data.length; i++) {
        let tb = document.getElementById('result')
      

        let tr = tb.insertRow();
        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_preco = tr.insertCell();
        let td_acao = tr.insertCell();
       

        td_id.innerHTML = data[i].id;
        td_nome.innerHTML = data[i].nome;
        td_preco.innerHTML = data[i].preco;

        td_acao.innerHTML = '<a href="mood/mood.html?id=' + data[i].id + '&operacao=editar"> Editar </a> <a href="mood/mood.html?id=' + data[i].id + '&operacao=excluir"class="ms-4">Excluir</a>' 
       
    }
}

function obterProdutos(idCome){
    fetch('http://localhost:3001/protudos/' + idCome)
    .then(response => response.json())
    .then(data => popularTable(data))
    .catch(error => console.log(error))
}



function popularTable(data){
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