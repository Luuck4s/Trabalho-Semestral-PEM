var qtdSalario = 0

function calcular() {
    if (qtdSalario < 25) {
        var p = document.getElementById("resultado")

        var salario = Number(window.prompt("Entre com o salário: \n\n" + (25 - qtdSalario) + " salários restantes"))


        if (salario <= 500) {
            salario += (salario * 0.05)
        } else if (salario <= 1200) {
            salario += (salario * 0.12)
        }

        if (salario <= 600) {
            salario += 150
        } else {
            salario += 100
        }

        alert("Novo salário com bonificação e o auxílio-escola R$ " + salario.toFixed(2))
        qtdSalario++

        calcular()
    }else{
        return false
    }
}
