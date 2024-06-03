let nome = document.querySelector("#nome")
let numero = document.querySelector("#numero")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let locate = document.querySelector("#locate")
let dcriar = document.querySelector(".dcriar")


dcriar.addEventListener("click",(e)=>{
    e.preventDefault()
    validarDadosDoCadastro()
})

async function validarDadosDoCadastro(){
    if(nome.value.length > 0 && numero.value.length > 0 && email.value.length > 0 && senha.value.length > 0){
       await fetch("http://localhost:3001/usuarios",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "nome": nome.value,
            "senha": senha.value,
            "email":  email.value,
            "numero": numero.value,
            "localizacao": locate.value
        })
       }).then(data=>{
        window.location.href="../../views/index/index.html"
       }).catch(err=>alert("Erro ao cadastrar usuario"))
       .finally(()=>{
        nome.value =""
        senha.value =""
        email.value =""
        numero.value =""
        locate.value=""
       })
    }
}