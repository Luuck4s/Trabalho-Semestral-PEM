function calcular() {
    var p = document.getElementById("resultado")
    var numeros = [], numPositivo = [], numNegativo = []

    for (let i = 0; i <= 7; i++) {
        numeros[i] = Number(window.prompt("Entre com um número"))
    }

    for(let i = 0; i <= 7; i++){
        if(numeros[i] > 0){
            numPositivo.push(numeros[i])
        }else if(numeros[i] < 0){
            numNegativo.push(numeros[i])
        }
    }


    p.innerHTML = "Números digitados: " +  numeros.toString() + "<br>Números negativos: " + numNegativo.toString() + "<br>Números positivos: " + numPositivo.toString()

}