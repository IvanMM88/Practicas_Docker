var nom="Jose Luis"
var ape="Martinez"
var nombre="XXXXXX"
var apellidos="WWWWW"

res = document.getElementById("p1").innerHTML=nom+" "+ape

nombre=prompt("Nombre:")
apellidos=prompt("Apellidos:")

res2 = document.getElementById("p2").innerHTML= nombre.toUpperCase()+" "+apellidos.toUpperCase()