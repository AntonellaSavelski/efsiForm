let valido = false;
let clase;

function validarNumMatematica(){
    let nota = document.getElementById("matematica").value
    if (nota >=1 && nota <= 10){
        valido = true;
        clase = "verde"
    }
    else{
        clase = "rojo"
    }
    const node = document.createElement("h4");
    const textnode = document.createTextNode(nota);
    node.appendChild(textnode);
    document.getElementById("formulario").appendChild(node);
}
function validarNumLengua(){
    let nota = document.getElementById("lengua").value
    if (nota >=1 && nota <= 10){
        valido = true;
        clase = "verde"
    }
    else{
        clase = "rojo"
    }
}
function validarNumEfsi(){
    let nota = document.getElementById("efsi").value
    if (nota >=1 && nota <= 10){
        valido = true;
        clase = "verde"
    }
    else{
        clase = "rojo"
    }
}
function validarPromedio(nota1,nota2,nota3){
    let promedio = (nota1+nota2+nota3)/3;
    if (promedio >=6){
        clase= "verde"
    }
    else{
        clase = "rojo"
    }
}
function notaMayor(nota1,nota2,nota3){
    let mayor;
    if(nota1> nota2 && nota1 > nota3){
        mayor = nota1
    }
    else if (nota2>nota1 && nota2 >nota3){
        mayor = nota2
    }
    else if (nota3 >nota1 && nota3>nota2){
        mayor = nota3
    }
}