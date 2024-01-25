let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`🎉Acertasate el número🎉en  ${intentos} ${(intentos === 1) ? 'Intento' : 'Intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();



/*
//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Ingresa un número del 1 al 10"
let númeroSecreto = generarNúmeroSecreto();
let intentos = 1;
let listaNúmerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    let númeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(númeroDeUsuario));
    //console.log(númeroSecreto);
    //console.log(typeof(númeroSecreto));
    //console.log(númeroDeUsuario);
    //console.log(númeroDeUsuario === númeroSecreto);
    if (númeroDeUsuario === númeroSecreto){
        asignarTextoElemento('p',`🎉Acertasate el número🎉 en ${intentos} ${(intentos === 1) ?'intento' :'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(númeroDeUsuario > númeroSecreto){
            asignarTextoElemento('p','El número secreto es menor ');
        }else{
            asignarTextoElemento('p','El número secreto es mayor ');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function generarNúmeroSecreto(){
    let númeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    //si el número generado esta incluido en la lista
    if (listaNúmerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números');
    }else {
        if (listaNúmerosSorteados.includes(númeroGenerado)){
            return generarNúmeroSecreto();
        }else {
            listaNúmerosSorteados.push(númeroGenerado);
            return númeroGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Número secreto');
    asignarTextoElemento('p', 'Ingresa un número del 1 al 10');
    númeroSecreto = generarNúmeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de ingreso de numero
    //generar el numero aleatorio 
    //inicializar el numero de intento
    condicionesIniciales();
    //deshabilitrar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

asignarTextoElemento('h1','Juego del Número secreto');
asignarTextoElemento('p', 'Ingresa un número del 1 al 10');


function limpiarCaja(){

    document.querySelector('#valorUsuario').value = '';
  
}
*/


















