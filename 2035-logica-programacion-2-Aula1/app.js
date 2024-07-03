let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento,texto) {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
}

function verificarIntento() {
       let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
            
       if(numeroUsuario === numeroSecreto)  {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
        } else {
                if (numeroUsuario>numeroSecreto)
                asignarTextoElemento('p','El número secreto es menor');
         else {
                asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarcaja();
        }
        return;
        
}

function limpiarcaja () {
       let valorCaja = document.querySelector('#valorUsuario')
       valorCaja.value = "";
}

function generarNumeroSecreto () {
        let numeroSorteado = Math.floor(Math.random()*numeroMaximo)+1; 

        console.log(numeroSorteado);
        console.log(listaNumerosSorteados);
        
        if (listaNumerosSorteados.length == numeroMaximo) {
                asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        } else {
        
        if (listaNumerosSorteados.includes(numeroSorteado)) {
                return generarNumeroSecreto ();   
                } else {
                listaNumerosSorteados.push(numeroSorteado);
                return numeroSorteado;
                 }
        }
}


function condicionesIniciales () {
        asignarTextoElemento('h1','Juego del número secreto');
        asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo} `);
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
}

function reiniciarJuego () {
        limpiarcaja();
        condicionesIniciales();
        document.querySelector('#reiniciar').setAttribute('disavled','true');
}

condicionesIniciales();