function calcular() {
    var p = document.getElementById("resultado")
    var numeros = []

    for (let i = 0; i <= 9; i++) {
        numeros[i] = Number(window.prompt("Entre com um número"))
    }

    for (let i = 0; i <= 9; i++) {
        if(numeros[i] != 0){
            if(numeros[i] % 2 == 0){
                numeros[i] = numeros[i] + 5
            }else{
                numeros[i] = numeros[i] * 5
            }
        }
    }

    p.innerHTML = "Vetor modificado: " + numeros.toString()
}


