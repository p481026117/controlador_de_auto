// function ControladorAuto(cadena) {
//   let dividir = cadena.split("/");
//   let grilla = dividir[0];
//   let posicionInicial = dividir[1];
//   let instrucciones = dividir[2];
//   if(grilla === null && posicionInicial === null){
//     let grillaDefault = "3,3";
//     let posicionInicialDefault = "1,1 N";
    
//   }else if(grilla === null){
//     let grillaDefault = "3,3";
//   }else {

//   }
// }
// function CadenaAProcesar(grilla, posicionInicial, instrucciones) {
  
// }
function Avanzar(posicion, grilla) {
  let filas = grilla[0];
  let columnas = grilla[1];
  if(posicion.direccion === "N" && posicion.j + 1 < filas){
    posicion.j++;
  }
  if(posicion.direccion === "S" && posicion.j - 1 >= 0){
    posicion.j--;
  }
  if(posicion.direccion === "E" && posicion.i + 1 < columnas){
    posicion.i++;
  }
  if(posicion.direccion === "O" && posicion.i - 1 >= 0){
    posicion.i--;
  }
  return posicion;
}

function GirarDer(posicion) {
  let direccionActualizada;
  if(posicion.direccion === "N"){
    direccionActualizada = "E";
  }
  if(posicion.direccion === "S"){
    direccionActualizada = "O";
  }
  if(posicion.direccion === "E"){
    direccionActualizada = "S";
  }
  if(posicion.direccion === "O"){
    direccionActualizada = "N";
  }
  posicion.direccion = direccionActualizada;
  return posicion;
}

class Posicion {  // Create a class
  constructor(i,j,direccion) {  // Class constructor
    this.i = i;  // Class body/properties
    this.j = j;
    this.direccion = direccion;
  }
}
function PositionInicial(i,j,direccion) {
  let tmp = new Posicion(i,j,direccion);
  return tmp;
}
// var list = [1,2,3,4,5].filter(function(x){ return x < 4; })
//                .map(function(x) { return 'foo ' + x; });
module.exports = {
  PositionInicial,
  Avanzar,
  GirarDer
}