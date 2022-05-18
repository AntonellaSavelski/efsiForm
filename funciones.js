let valido=false;

function validarNumero(nota, materia){
    if (nota >=1 && nota <= 10){
    document.getElementById(materia).style.color = "green"
        valido = true;
    }
    else{
        document.getElementById(materia).style.color = "red"
        valido = false;
    }
}
function validarPromedio(){
    let nota1= document.getElementById("matematica").value
    let nota2= document.getElementById("lengua").value
    let nota3= document.getElementById("efsi").value
    if (valido===false){
        alert("Por favor ingrese todas las notas")
    }
    else{
        let promedio = (parseFloat(nota1)+ parseFloat(nota2)+ parseFloat(nota3))/3;
        document.getElementById("resultado").innerHTML=`El promedio entre las 3 materias es ${promedio}`;
        if (promedio >=6){
            document.getElementById("resultado").style.color = "green"
            valido = true;
        }
        else{
            document.getElementById("resultado").style.color = "red"
        }
    }
}
function notaMayor(){
    let mayor;
    let materiaMayor;
    let nota1= document.getElementById("matematica").value
    let nota2= document.getElementById("lengua").value
    let nota3= document.getElementById("efsi").value

    if (valido===false){
        alert("Por favor ingrese todas las notas")
    }
    else{
        if(nota1>=nota2 && nota1>=nota3){
            mayor= nota1
            materiaMayor = "Matematica"
        }
        else if (nota2>=nota1 && nota2>=nota3){
            mayor= nota2
            materiaMayor = "Lengua"
        }
        else if (nota3>=nota1 && nota3>=nota2){
            mayor = nota3
            materiaMayor = "Efsi"
        }
        document.getElementById("resultado").style.color = "blue"
        document.getElementById("resultado").innerHTML=`La nota mayor es ${mayor} y corresponde a la materia ${materiaMayor}`;
    }
    
}