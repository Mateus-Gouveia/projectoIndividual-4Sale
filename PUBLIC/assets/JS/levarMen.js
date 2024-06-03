document.addEventListener("DOMContenLoaded", function() { 
    var formulari = document.getElementById("formularioDeCad");
    var botao = document.getElementById("submitbutton");

    botao.addEventListener("click", function(event) {
        event.preventDefault();
        formulari.submit();
        location.href = "#index.html";
    });
});