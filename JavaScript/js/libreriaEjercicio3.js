
var nota = prompt("Nota:")
x = parseInt(nota)

switch(x){
    case 0:
    case 1:    
    case 2:  
    case 3:    
    case 4:
        //Si no pones break en los "case" lo toma todo como el ultimo break. En este caso INSUFICIENTE
        resultado="La nota es INSUFICIENTE"
        break;
    case 5:
        resultado="La nota es SUFICIENTE"
        break;
    case 6:
        resultado="La nota es BIEN"
        break;
    case 7:
        resultado="La nota es BIEN ALTO"
        break;
     case 8:
        resultado="La nota es NOTABLE"
        break;
     case 9:
        resultado="La nota es NOTABLE ALTO"
        break;
     case 10:
        resultado="La nota es SOBRESALIENTE"
        break;
}

document.getElementById("p1").innerHTML=resultado