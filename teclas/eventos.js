var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var cuadrito = document.getElementById("area_de_dibujo");
var botonCambiarBlanco = document.getElementById("cambiar_blanco");
var botonCambiarVerde = document.getElementById("cambiar_verde");
var botonCambiarAzul = document.getElementById("cambiar_azul");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
var colorcito;
cambiarAzul();

cuadrito.addEventListener("mousemove", dibujarTeclado);
botonCambiarBlanco.addEventListener("mousemove", cambiarBlanco);
botonCambiarVerde.addEventListener("mousemove", cambiarVerde);
botonCambiarAzul.addEventListener("mousemove", cambiarAzul);

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujarTeclado(evento) {
    
    if (evento.buttons == 1) {
        dibujarLinea(colorcito, x, y, evento.layerX, evento.layerY, papel);
        x = evento.layerX;
        y = evento.layerY;
    }

}

function cambiarBlanco() {
    colorcito = "#fff";
}

function cambiarVerde() {
    colorcito = "#98ca3f";
}

function cambiarAzul() {
    colorcito = "#1c3643";
}