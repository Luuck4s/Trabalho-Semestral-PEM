var d1 = Number(window.prompt("Entre com o [DIA] da primeira data."))
var m1 = Number(window.prompt("Entre com o [MÊS] da primeira data."))
var a1 = Number(window.prompt("Entre com o [ANO] da primeira data."))
var d2 = Number(window.prompt("Entre com o [DIA] da segunda data."))
var m2 = Number(window.prompt("Entre com o [MÊS] da segunda data."))
var a2 = Number(window.prompt("Entre com o [ANO] da segunda data."))

if (d1 > 31 || d2 > 31 || d1 < 1 || d2 < 1) {
    alert('Dia Inválido')
} else if (m1 > 12 || m2 > 12 || m1 < 1 || m2 < 1) {
    alert('Mês Inválido')
} else if (a1 < 0 || a2 < 0) {
    alert('Ano Inválido')
} else {
    if (a1 > a2) {
        alert(`A data mais antiga é a ${d2}/${m2}/${a2}`)
    } else if (a2 > a1) {
        alert(`A data mais antiga é a ${d1}/${m1}/${a1}`)
    } else {
        if (m1 > m2) {
            alert(`A data mais antiga é a ${d2}/${m2}/${a2}`)
        } else if (m1 < m2) {
            alert(`A data mais antiga é a ${d1}/${m1}/${a1}`)
        } else {
            if (d1 > d2) {
                alert(`A data mais antiga é a ${d2}/${m2}/${a2}`)
            } else if (d1 < d2) {
                alert(`A data mais antiga é a ${d1}/${m1}/${a1}`)
            } else {
                alert(`As data são iguais`)
            }
        }
    }
}

