document.addEventListener("DOMContentLoaded", function() {
    var botaoC = document.getElementById("dcompra");

    botaoC.addEventListener("click", function() {
        var nome_produto = "Nike Air Force";
        var preco_produto = "40.000kz";

        var confirmacao = confirm("Estás prestes a comprar a" + " " + nome_produto + " " + "ao preço de" + " " + preco_produto + " " + "Deseja continuar?");
        if(confirmacao) {
            alert("Compra em processamento, contacte o vendedor 928598488");
        } else{
            alert("compra cancelada");
        }
    });
});