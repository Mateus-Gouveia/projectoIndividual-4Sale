let nome = document.querySelector("#nome")
let preco = document.querySelector("#preco")
let desc = document.querySelector("#desc")
let state = document.querySelector("#state")
let locate = document.querySelector("#locate")
let sale = document.querySelector(".sale")


sale.addEventListener("click",(e)=>{
    e.preventDefault()
    validarDadosDoCadastro()
})

async function validarDadosDoCadastro(){
    if(nome.value.length > 0 && preco.value.length > 0 && desc.value.length > 0 ){
       await fetch("http://localhost:3001/protudos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "nome": nome.value,
            "preco": preco.value,
            "descricao":  desc.value,
            "localizacao": locate.value,
            "estado": state.value
        })
       }).then(data=>{
        window.location.href="../../views/index/index.html"
       }).catch(err=>alert("Erro ao cadastrar disponibilizar produto"))
       .finally(()=>{
        nome.value =""
        preco.value =""
        descricao.value =""
        locate.value =""
        state.value =""
       })
    }
}