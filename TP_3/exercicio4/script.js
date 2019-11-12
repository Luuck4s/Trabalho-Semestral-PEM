function ordenarVetor() {
    var p = document.getElementById("resultado")
    var numeros = [], aux

    for (let i = 0; i <= 19; i++) {
        numeros[i] = Number(window.prompt("Entre com um número"))
    }

    for (let i = 0; i <= 19; i++) {
        for (let j = 0; j <= 19 ; j++) {
            if(numeros[i] < numeros[j]){
                aux = numeros[i]
                numeros[i] = numeros[j]
                numeros[j] = aux
            }
        }
    }


    p.innerHTML = "Números em ordem: " + numeros.toString()
}