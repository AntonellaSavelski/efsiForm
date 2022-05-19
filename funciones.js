let valido=false;

function validarNumero(nota, materia){
    parseFloat(nota);
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
    let nota1= parseFloat(document.getElementById("matematica").value)
    let nota2= parseFloat(document.getElementById("lengua").value)
    let nota3= parseFloat(document.getElementById("efsi").value)
    
    if (isNaN(nota1)|| isNaN(nota2) || isNaN(nota3)){
        alert("Por favor ingrese todas las notas con los valores correspondientes")
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
            valido = false;
        }
    }
}
function notaMayor(){
    let mayor = "";
    let materiaMayor = "";
    let nota1= parseFloat(document.getElementById("matematica").value)
    let nota2= parseFloat(document.getElementById("lengua").value)
    let nota3= parseFloat(document.getElementById("efsi").value)

    if (isNaN(nota1)|| isNaN(nota2) || isNaN(nota3)|| valido === false){
        alert("Por favor ingrese todas las notas con los valores correspondientes")
    }
    else{
        if(nota1>=nota2 && nota1>=nota3){
            mayor= nota1
            materiaMayor += "Matematica "
        }
        if (nota2>=nota1 && nota2>=nota3){
            mayor= nota2
            materiaMayor += "Lengua "
        }
        if (nota3>=nota1 && nota3>=nota2){
            mayor= nota3
            materiaMayor += "Efsi "
        }
        document.getElementById("resultado").style.color = "blue"
        document.getElementById("resultado").innerHTML=`La nota mayor es ${mayor} y corresponde a la materia ${materiaMayor}`;
    }
    
}