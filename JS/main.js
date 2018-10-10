const button = document.querySelector("#btnNext");
button.addEventListener("click", function(event){
    event.preventDefault();
    //const form = document.querySelectorAll(".formShipping")
    let addressOrigin = document.querySelector("#fieldAddressOrigin").value;
    let commentOrigin = document.querySelector("#commentOrigin").value;
    if(confirm("Confirma os dados inseridos? \n" + "Endereço: " + addressOrigin +"\nObservações: " + commentOrigin)) {
        alert("O pedido foi enviado")
    } else {
        let change = (prompt("Insira aqui o que pretende mudar"))
        //commentOrigin = change.value;
        change = commentOrigin;
        console.log(commentOrigin);
    }
});

