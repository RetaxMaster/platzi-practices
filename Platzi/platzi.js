var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(1, 50);
var cerdoX;
var cerdoY;
var esPrimeraPosicion = true;
var Teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo = crearObjeto("tile.png");
cargarImagen(fondo, cargarFondo);

var vaca = crearObjeto("vaca.png");
cargarImagen(vaca, cargarVaca);

var cerdo = crearObjeto("cerdo.png");
cargarImagen(cerdo, cargarCerdo);

document.addEventListener("keyup", moverCerdo);

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOk = true;
    dibujar();
}

function moverCerdo(event) {

    switch (event.keyCode) {

        case Teclas.UP:
            cerdoY = cerdoY - 60;
            break;

        case Teclas.DOWN:
            cerdoY = cerdoY + 60;
            break;

        case Teclas.LEFT:
            cerdoX = cerdoX - 60;
            break;

        case Teclas.RIGHT:
            cerdoX = cerdoX + 60;
            break;
    
    }

    dibujar();
    
}

function dibujar() {

    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOk) {
        dibujarVaca(vaca);
    }

    if (cerdo.cargaOk) {

        if (esPrimeraPosicion) {
            var posiciones = obtenerPosicionAleatoria();
            cerdoX = posiciones.x;
            cerdoY = posiciones.y;
        }

        esPrimeraPosicion = false;
        
        papel.drawImage(cerdo.imagen, cerdoX, cerdoY);

    }

}

function dibujarVaca(vaca) {
    for (var v = 0; v < cantidad; v++) {
        var posiciones = obtenerPosicionAleatoria();
        papel.drawImage(vaca.imagen, posiciones.x, posiciones.y);
    }   
}

function obtenerPosicionAleatoria() {
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
    x = x * 60;
    y = y * 60;
    return {
        x: x,
        y: y
    }
}

function crearObjeto(url) {
    return {
        url: url,
        cargaOk: false
    }
}

function cargarImagen(objeto, cargarImagen) {
    objeto.imagen = new Image();
    objeto.imagen.src = objeto.url;
    objeto.imagen.addEventListener("load", cargarImagen);
}

function aleatorio(min, max) {
    var resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

