function calcular() {
    var p = document.getElementById("resultado")
    var count = 0
    var numero = Number(window.prompt("Entre com um número"))


    for (let i = 1; i <= numero; i++) {
        if(numero%i == 0){
            count++
        }
    }   

    if(count == 2){
        p.innerHTML = `${numero} é primo`
    }else{
        p.innerHTML = `${numero} não é primo`
    }
}