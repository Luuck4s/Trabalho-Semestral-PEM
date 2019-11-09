function calcular() {
    var p = document.getElementById("resultado")
    var aux, prox
    var atual = 1
    var ant = 0
    var qtd = Number(window.prompt("Entre com a quantidade de termos"))

    p.innerHTML += "1 "
    for(let i = 0; i < qtd; i++){
        prox = ant + atual
        aux = ant
        ant = atual 
        atual = prox
        
        p.innerHTML += " " + prox 
    }

}


