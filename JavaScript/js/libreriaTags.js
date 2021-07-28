function contarParrafos(){

var numP = document.getElementsByTagName("p")
//guardamos todos los objetos con el tagname "p" 
//en una variable llamada numP

var num = numP.length;
//contabilizamos los elementos de numP con .length
// y lo guardamos en la variable num(ya es un número)

alert("Hay " + num + " elementos con la etiqueta <p>")
 //imprimimos el número de elementos por pantalla

 for( let o=0;o<numP.length; o++){
        document.getElementById("vacio").innerHTML = document.getElementById("vacio").innerHTML + numP[o]
 }
}