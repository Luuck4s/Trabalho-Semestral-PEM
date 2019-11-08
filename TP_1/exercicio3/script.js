function calcular() {
    var a = Number(document.getElementById("a").value)
    var b = Number(document.getElementById("b").value)
    var c = Number(document.getElementById("c").value)
    var p = document.getElementById("resultado")
    

    p.innerHTML = ""

    if(a < b && a < c){
        p.innerHTML += "<br>" + a 

        if(b < c){
            p.innerHTML += "<br>" + b 
            p.innerHTML += "<br>" + c 
        }else{
            p.innerHTML += "<br>" + c
            p.innerHTML += "<br>" + b 
        }

    }else if(b < c){
        p.innerHTML += "<br>" + b

        if(a < c){
            p.innerHTML += "<br>" + a
            p.innerHTML += "<br>" + c 
        }else{
            p.innerHTML += "<br>" + c
            p.innerHTML += "<br>" + a 
        }
    }else{
        p.innerHTML += "<br>" + c
        if(a < b){
            p.innerHTML += "<br>" + a
            p.innerHTML += "<br>" + b
        }else{
            p.innerHTML += "<br>" + b
            p.innerHTML += "<br>" + a
        }
    }
}


