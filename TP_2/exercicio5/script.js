function calcular() {
    var p = document.getElementById("resultado")
    var num = Number(window.prompt("Entre com um número"))

    if (num < 0) {
        return 'Valor deve ser maior ou igual a zero'

    } else if ((num == 0) || (num == 1)) {
        return 1
    } else {
        var acumula = 1;
        for (x = num; x > 1; x--) {
            acumula = acumula * x;
        }

        p.innerHTML = "Fatorial de " + num + " = " + acumula
    }

}