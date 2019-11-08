function calcular() {
    var a = Number(document.getElementById("a").value)
    var b = Number(document.getElementById("b").value)
    var c = Number(document.getElementById("c").value)
    var p = document.getElementById("resultado")
    var delta = (Math.pow(b, 2)) - (4 * a * c)

    p.innerHTML = ""

    if (a != 0) {
        if (delta > 0) {
            var x1 = (-b + (Math.sqrt(delta))) / 2 * a
            var x2 = (-b - (Math.sqrt(delta))) / 2 * a
            p.innerHTML += "Há duas raizes<br>"
            p.innerHTML += `Primeira Raiz: <b>${x1}</b><br>`
            p.innerHTML += `Segunda Raiz: <b>${x2}</b><br>`
        } else if (delta == 0) {
            var x1 = (-b + (Math.sqrt(delta))) / 2 * a
            p.innerHTML += "Há uma raiz<br>"
            p.innerHTML += `Primeira Raiz: <b>${x1}</b><br>`
        } else {
            p.innerHTML += "Não há raizes<br>"
        }
    }else{
        p.innerHTML += `"A" precisa ser diferente de 0<br>`
    }
}