//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Ingresa un número del 1 al 10"

let númeroSecreto = generarNúmeroSecreto();
let intentos = 1;

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
    }else {
        if(númeroDeUsuario > númeroSecreto){
            asignarTextoElemento('p','El número secreto es menor ');
        }else{
            asignarTextoElemento('p','El número secreto es mayor ');
        }
        intentos++;
    }
    return;
}

function generarNúmeroSecreto(){
    return Math.floor(Math.random()*10)+1;
    
}

asignarTextoElemento('h1','Juego del Número secreto');
asignarTextoElemento('p', 'Ingresa un número del 1 al 10');








