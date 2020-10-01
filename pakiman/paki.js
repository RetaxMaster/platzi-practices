/* var coleccion = [];

coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

console.log(coleccion);

for (var pakin of coleccion) {    
    pakin.mostrar();
} */

var usuario = prompt("Cuatos pesas?");
        var planeta = parseInt(prompt("Elige un planeta\n Escribe 1 para Marte y 2 para Jupiter"));
        var peso = parseFloat(usuario);
        var gravedadTierra = 9.8;
        var gravedadMarte = 3.7;
        var gravedadJupiter = 24.8;
        //var peso = 65;
        var pesoMarte;
        var pesoJupiter;
        pesoMarte = peso * gravedadMarte / gravedadTierra;
        pesoJupiter = peso * gravedadJupiter /gravedadTierra;

        if (planeta == 1){
          document.write("Tu peso en Marte es de <strong>",parseInt(pesoMarte)," kg </strong>");
        } else if (planeta == 2) {
        
        
        document.write("Tu peso en Jupiter es de <strong>",parseInt(pesoJupiter)," Kg</strong>");
        }else{
          ducument.write("Tas mal");
        }