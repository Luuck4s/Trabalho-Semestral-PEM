var num, i = 0, numeros = [], count = 0

function calcular() {
    var p = document.getElementById("resultado")

    if (i == 0) {
        num = Number(window.prompt("Entre com um número\nFaltam: " + (100 - i) + " números \nDigite [0] para parar"))
        if (num != 0) {
            numeros.push(num)
            i++
            calcular()
        }
    } else if (num != 0 && i <= 99) {
        num = Number(window.prompt("Entre com um número\nFaltam: " + (100 - i) + " números \nDigite [0] para parar"))
        if (num != 0) {
            numeros.push(num)
            i++
        }
        calcular()
    } else {
        for (let j = 0; j < i; j++) {
            if (numeros[j] == numeros[i - 1]) {
                count++
            }
        }

        p.innerHTML = "Números digitados: " + numeros.toString() + "<br>"
        p.innerHTML += `Existem ${count} repetições do ${numeros[i - 1] ? numeros[i - 1] : numeros[0]}`
    }

}