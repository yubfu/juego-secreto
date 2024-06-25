let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
};

function verificarEvento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(`vas en el inteto numero : ${intentos}`);
    if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //usario no acerta
        if (numeroUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
    }else{
        asignarTextoElemento('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
    };
    
    console.log(`numero ingresado ${numeroUsuario}`);
    console.log(`numero secreto es ${numeroSecreto}`);
    console.log(numeroUsuario==numeroSecreto);
    return;
};

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon los parrafos posibles');

    }else {
         //verificar si el numero esta generado en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
        console.log('ingrese a recursividad');
        return generarNumeroSecreto();   
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
    };
    };

   

};

function limpiarCaja(){
   document.querySelector('#valorUsuario'). value ='';
};

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
};

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    // condiciones iniciales
    condicionesIniciales();
    //deshabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled',true);
};


condicionesIniciales();

