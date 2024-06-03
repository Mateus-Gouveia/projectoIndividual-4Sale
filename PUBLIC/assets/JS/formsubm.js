const submitButton = document.getElementById("submitButton");
const formularioDeCad = document.getElementById("formularioDeCad");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    //envia os dados para o server

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status ==200){
            // Resposta do server
            console.log(this.responseText);
    }
    
    };
    xhttp.open("POST", "backend.js", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("nome=" + nome + "&email=" + email + "&senha=" + senha);

});


