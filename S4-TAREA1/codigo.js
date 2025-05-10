//Josias Alvarado Vargas//
//Ingeniería de Software "A2"//
//10/05/2025//

//Ejercicio1//
//Solicita al usuario su ingreso anual y calcula el porcentaje de impuesto a pagar//
function Ejercicio1(){
    let ingresoAnual = parseFloat(document.getElementById("ingresoAnual").value);
    let porcentaje = 0;
    let resultado;
    let mensaje = document.getElementById("mensaje");

    if ((isNaN(ingresoAnual) || ingresoAnual < 0)){
        mensaje.textContent = "Ingrese números válidos";
        document.getElementById("resultado").value = "";
        return;
    }
    mensaje.textContent = "";

    if (ingresoAnual < 10000){
        porcentaje = 0.05;
    }else{
        if (ingresoAnual <= 20000){
            porcentaje = 0.10;
        }else{
            if (ingresoAnual <= 35000){
            porcentaje = 0.15;
            }else{
                porcentaje = 0.20;
            }
        }
    }
resultado = ingresoAnual * porcentaje;
document.getElementById("resultado").value = resultado.toFixed(2);
    
}

//Ejercicio2//
// Pide una calificación numérica al usuario. Si es menor a 5, preguntar si presentó una prueba de recuperación (sí o no)//

function Ejercicio2() {
    let calificacion = parseFloat(document.getElementById("calificacion").value);
    const preguntaDiv = document.getElementById("pregunta-recuperacion");
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        resultadoDiv.textContent = "Por favor, ingrese una calificación válida entre 0 y 10.";
        preguntaDiv.style.display = "none";
    return;
}

if (calificacion < 5) {
    preguntaDiv.style.display = "block";
    resultadoDiv.textContent = "";
} else {
    resultadoDiv.textContent = "Aprobado con calificación: " + calificacion;
    preguntaDiv.style.display = "none";
}
}

function evaluarRecuperacion() {
const respuesta = document.getElementById("recuperacion").value.trim().toLowerCase();
const resultadoDiv = document.getElementById("resultado");

if (respuesta === "si") {
    resultadoDiv.textContent = "Presentó recuperación. Tiene otra oportunidad.";
} else if (respuesta === "no") {
    resultadoDiv.textContent = "No presentó recuperación. Reprobado.";
} else {
    resultadoDiv.textContent = "Respuesta inválida. Escriba 'si' o 'no'.";
}
}

//Ejercicio3//
//Solicita al usuario una nota del 0 al 100 y muestra su equivalencia en calificación con
//letra según la siguiente escala:
//90 a 100: A
// 80 a 89: B
// 70 a 79: C
// 60 a 69: D
// Menor a 60: F
//Si la nota está fuera de ese rango, muestra “Nota inválida”.//

function Ejercicio3(){
    let nota = parseFloat(document.getElementById("nota").value);
    let resultado;
    let mensaje = document.getElementById("mensaje");

    if ((isNaN(nota) || nota < 0 || nota > 100)){
        mensaje.textContent = "Ingrese una nota válida";
        document.getElementById("resultado").textContent = "";
        return;
    }
    mensaje.textContent = "";

    if (nota > 100){
        resultado = "Nota no válida";
    }else{
        if (nota >= 90){
            resultado = "A";
        }else{
            if (nota >= 80){
                resultado = "B";
            }else{
                if (nota >= 70){
                    resultado = "C";
                }else{
                    if (nota >= 60){
                        resultado = "D";
                    }else{
                        resultado = "F";
                    }
                }
            }
        }
    }
    document.getElementById("respuesta").textContent ="Resultado :" + " " + resultado;
}


//Ejercicio4//
//Solicita al usuario el peso de un paquete (en kg) y el destino (nacional o
// internacional).
// Calcula la tarifa según las siguientes reglas:
//  Nacional:
//  Hasta 1 kg: $5
//  Más de 1 kg y hasta 5 kg: $10
//  Más de 5 kg: $15
//  Internacional:
//  Hasta 1 kg: $10
//  Más de 1 kg y hasta 5 kg: $20
//  Más de 5 kg: $30

function Ejercicio4(destino){
            let peso = parseFloat(document.getElementById("peso").value);
            let tarifa ;
            let mensaje = document.getElementById("mensaje");

            if ((isNaN(peso)|| peso < 0 )){
                mensaje.textContent = "Ingrese un numero valido";
                document.getElementById("tarifa").textContent = "";
                return
            }

            mensaje.textContent = "";
            
            if(destino === 'nacional'){
                if ( peso <= 1 ){
                    tarifa = "$5";
                }else if ( peso <= 5){
                    tarifa = "$10";
                }else {
                    tarifa = "$15";
                }
            }else if ( destino === 'internacional'){
                if ( peso <= 1 ){
                    tarifa = "$10";

                }else if ( peso <= 5 ){
                    tarifa = "$20";
                }else{
                    tarifa = "$30";
                }
            }

        document.getElementById("tarifa").textContent = tarifa;
        }


//Ejercicio5//
//Pide al usuario ingresar una temperatura en grados Celsius. Según el valor ingresado, muestra un mensaje con la clasificación del clima:

// Menor a 0: "Clima helado"
// Entre 0 y 15: "Clima frío"
// Entre 16 y 25: "Clima templado"
// Entre 26 y 35: "Clima cálido"
// Mayor a 35: "Clima muy caluroso"//

function Ejercicio5(){
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let clima;
    let mensaje = document.getElementById("mensaje");

    if((isNaN(temperatura))){
        mensaje.textContent = "Ingrese valores válidos";
        document.getElementById("clima").textContent = "";
        return;
    }

    mensaje.textContent = "";

    if(temperatura < 0){
        clima = "Clima helado";
    }else{
        if (temperatura <= 15){
            clima = "Clima frío";
        }else{
            if (temperatura <= 25){
                clima = "Clima templado";
            }else{
                if(temperatura <= 35){
                    clima = "Clima cálido";
                }else{
                    clima = "Clima caluroso";
                }
            }
        }
    }

    document.getElementById("clima").textContent = "🌡️" + clima;
}
