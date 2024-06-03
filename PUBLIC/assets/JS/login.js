let numero = document.querySelector("#numero")
let senha = document.querySelector("#senha")
let sub = document.querySelector("#sub")

sub.addEventListener("click",(e)=>{
    e.preventDefault()
    validarLogin()
})

async function validarLogin(){
    if(numero.value.length > 0 && senha.value.length > 0){
        await fetch("http://localhost:3001/users",{
         method:"POST",
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify({
            "numero": numero.value,
            "senha": senha.value
         })
        }).then(data=>{
            return data.json()
        })
        .then(respo=>{
            if(respo.message === "NOT EXISTS"){
                return alert("USUARIO NAO EXISTE")
            }else if(respo.message !== "ERROR"){
                window.location.href="../../views/home/home.html"
            }else{
                return alert("INFORME OS DADOS CORRETOS")
            }
        })
        .catch(err=>alert("Erro ao cadastrar usuario"))
        .finally(()=>{
         senha.value =""
         numero.value =""
        })
     }
}