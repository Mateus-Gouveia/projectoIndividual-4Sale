let pesqui = document.querySelector("#pesqui")
let bpesqui = document.querySelector(".bpesqui")
let idser = document.querySelector("#idser")

bpesqui.addEventListener("click",(e)=>{
    e.preventDefault()
    validarComentario()
})

async function validarComentario(){
    if(pesqui.value.length > 0 & idser.value.length > 0  ){
       await fetch("http://localhost:3001/come",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "pesqui": pesqui.value,
            "idser": idser.value
           
        })
       }).then(data=>{
        window.location.href="../../views/index/index.html"
       }).catch(err=>alert("Erro ao cadastrar este comentário"))
       .finally(()=>{
        pesqui.value =""
        idser.value = ""
        
       })
    }
}