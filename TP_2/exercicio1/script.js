function calcular() {
    var p = document.getElementById("resultado")

    var salarios = []
    p.innerHTML += "Sálarios Anteriores <br>"
    for (let i = 0; i <= 24; i++) {
        salarios.push(Math.ceil(Math.random() * (2500 - 450) + 450))
        p.innerHTML += (i + 1) + "º salário: R$ " + salarios[i].toFixed(2) + "<br>"
    }

    p.innerHTML += "<br>Novos Sálarios <br>"

    for (let i = 0; i <= 24; i++) {
        if (salarios[i] <= 500) {
            salarios[i] += (salarios[i] * 0.05)
        } else if (salarios[i] <= 1200) {
            salarios[i] += (salarios[i] * 0.12)
        }

        if (salarios[i] <= 600) {
            salarios[i] += 150
        } else {
            salarios[i] += 100
        }

        p.innerHTML += (i + 1) + "º salário: R$ " + salarios[i].toFixed(2) + "<br>"
    }
}