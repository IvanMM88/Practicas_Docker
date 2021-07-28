var x=10 //global scope
let z=20 //restricted scope (local)
const pi=3.14 //Constante
x=10+2

//Por la consola de desarrollo
console.log(x)

//Lo pinta en la página
document.write("on Document.write -->El resultado es "+x)

//Lo pinta mediante una alerta
{
    alert("El resultado:"+x)
}

//Mediante DOM
document.getElementById("p1").innerHTML="Ya he hecho el calculo"+x