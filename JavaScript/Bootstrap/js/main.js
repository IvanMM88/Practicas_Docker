var numL = document.getElementsByTagName("a")

var num = numL.length;

alert("Hay " + num + " enlaces en la página")

alert("La dirección del penúltimo enlace es: " + numL[6])

var contador=0
for(i in numL){
    if(numL[i]=="http://prueba/"){
        contador++
    }
}
alert("El número de enlaces que enlazan http://prueba es: " + contador)