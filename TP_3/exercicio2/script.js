function calcular() {
    var p = document.getElementById("resultado")
    var numeros = []
    var flag = 0

    for (let i = 0; i <= 7; i++) {
        numeros[i] =Number(window.prompt("Entre com um número: "))
    }
    
    for (let i = 0; i <= 7; i++) {
        if(numeros[i] > 50){
            p.innerHTML += numeros[i] + " na posição " + i + "<br>"
            flag = 1
        }
    }

    if(flag != 1){
        p.innerHTML = "Não tem números maiores que 50"
    }
    
}