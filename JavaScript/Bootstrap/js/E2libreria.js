function enviar(){
        var linea = document.createElement("li");
        linea.textContent = document.getElementById("texto1").value;
        document.getElementById("lista").appendChild(linea);
}

function borrar(){
    arrayPalabras = document.getElementsByTagName("li")
         numeroPalabras = document.getElementsByTagName("li").length

         palabraBorr=document.getElementById("texto1").value

            for (let i = 0; i < arrayPalabras.length; i++){
                 if(arrayPalabras[i].innerHTML==palabraBorr){
                       arrayPalabras[i].parentNode.removeChild(arrayPalabras[i])
                 }else{
                    document.getElementById("salida").innerHTML ="<b>ERROR EN LA INSERCION DE NOMBRE A BORRAR</b>"
                    }
            }
}