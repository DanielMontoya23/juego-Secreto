//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';
//se elimina lo anterior y se aplica la función de abajo y se llama la función en la parte inferior de todo

let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ?'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random()*10+1)
    //return numeroSecreto;
    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    //si ya sorteamos todos los números
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')

    }else{

        //Si el número generado esta incluido en la lista realizamos una operación, sino hacemos otra
        if(listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón del nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();