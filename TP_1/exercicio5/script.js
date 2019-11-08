var op

op = Number(window.prompt("Escola uma opção\n [1] - Somar dois números \n [2] - Raiz quadarade de um número"))

switch (op) {
    case 1: {
        var n1 = Number(window.prompt("Entre com primeiro número:"))
        var n2 = Number(window.prompt("Entre com primeiro número:"))

        alert(`A soma de ${n1} + ${n2} = ${n1 + n2}`)
        break
    }
    case 2: {
        var n = Number(window.prompt("Entre com o número"))

        alert(`A raiz quadrada de ${n} é ${Math.sqrt(n)}`)
        break
    }
    case 0: {
        alert("Operação cancelada !!")
        break
    }
    default: {
        alert("Opção inválida !!!")
        break
    }
}