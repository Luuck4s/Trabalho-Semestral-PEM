function calcular(){
    var n1 = Number(document.getElementById("primeiraNota").value)
    var n2 = Number(document.getElementById("segundaNota").value)
    var n3 = Number(document.getElementById("terceiraNota").value)
    var pResposta = document.getElementById("resultado")
    var media 
    

    if(((n1 >= 0) || (n2 >= 0) || (n3 >= 0)) && ((n1 <= 10) && (n2 <= 10) && (n3 <= 10))){
        media = ((n1 * 3) + (n2 * 5) + (n3 * 2)) / 10
        
        pResposta.innerHTML = media 
        if(media > 0 && media <= 4.9){
            pResposta.innerHTML += "<br>E"
        }else if(media <= 5.9){
            pResposta.innerHTML += "<br>D"
        }else if(media <= 6.9){
            pResposta.innerHTML += "<br>C"
        }else if(media <= 7.9){
            pResposta.innerHTML += "<br>B"
        }else {
            pResposta.innerHTML += "<br>A"
        }
    }else{
        pResposta.innerHTML += "Notas Inválidas"
    }  

}