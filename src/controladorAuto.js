
function ProcesarComandos(grilla, posicion, instrucciones) {
  let grillaConvertida = ConvertirGrilla(grilla);
  let posicionConvertida = ConvertirPosicion(posicion);
  let dict = {"A":Avanzar(posicionConvertida,grillaConvertida), "I":GirarIzq(posicionConvertida), "D": GirarDer(posicionConvertida)};
  for(let item of instrucciones){
    posicionConvertida = dict[item];
  }
  return posicionConvertida;
}
function ConvertirGrilla(grilla) {
  return grilla.split(",").map(i => parseInt(i,10));
}
function ConvertirPosicion(posicion) {
  let posicionRemplazo = posicion.replace(" ", ",").split(",");
  let x = posicionRemplazo[0];
  let y = posicionRemplazo[1];
  let Direccion = posicionRemplazo[2];
  return new Posicion(parseInt(x,10), parseInt(y,10),Direccion);
}
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

function GirarIzq(posicion) {
  let dict = {N:"O", S:"E", E:"N", O:"S"};
  posicion.direccion = dict[posicion.direccion];
  return posicion;
}

function GirarDer(posicion) {
  let dict = {N:"E", S:"O", E:"S", O:"N"}
  posicion.direccion = dict[posicion.direccion];
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
module.exports = {
  PositionInicial,
  Avanzar,
  GirarIzq,
  GirarDer,
  ConvertirGrilla,
  ConvertirPosicion,
  ProcesarComandos
}