var qtdEntradas = 0
var qtdTinto = 0
var qtdRose = 0
var qtdBranco = 0

function entradaVinhos() {
    if (qtdEntradas < 50) {
        let op = Number(window.prompt("Entre com o tipo de vinho\n[1]-Tinto\n[2]-Branco \n[3]-Rosê\n\nFaltam: " + (50 - qtdEntradas) + " vinhos."))

        switch (op) {
            case 1:
                qtdTinto++
                break
            case 2:
                qtdBranco++
                break
            case 3:
                qtdRose++
                break
        }
        qtdEntradas++

        entradaVinhos()
    } else {
        alert("Porcentagem de vinhos Tintos: " + (qtdTinto * 100 / qtdEntradas) + "%\nPorcentagem de vinhos Branco: " + (qtdBranco * 100 / qtdEntradas) + "%\nPorcentagem de vinhos Rosê: " + (qtdRose * 100 / qtdEntradas) + "%")
    }
}