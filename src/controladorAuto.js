function ControladorAuto(cadena) {
  let dividir = cadena.split("/");
  let grilla = dividir[0];
  let posicionInicial = dividir[1];
  let instrucciones = dividir[2];
  return ConvertirAString(ProcesarComandos(grilla,posicionInicial,instrucciones));
}
function ConvertirAString(posicion) {
  return [posicion.i, posicion.j].join(",") + [" ",posicion.direccion].join("");
}
function ProcesarComandos(grilla, posicion, instrucciones) {
  let grillaConvertida = ConvertirGrilla(grilla);
  let posicionConvertida = ConvertirPosicion(posicion);
  for(let item of instrucciones){
    posicionConvertida = SeleccionarInstruccion(item,grillaConvertida,posicionConvertida);
  }
  return posicionConvertida;
}
function SeleccionarInstruccion(item, grilla, posicion) {
  switch(item) {
    case "A": 
      return Avanzar(posicion,grilla);
    case "I":
      return GirarIzq(posicion);
    case "D":
      return GirarDer(posicion);
  }
}
function ConvertirGrilla(grilla) { //DEVUELVE UN ARRAY DE ENTEROS[n,m]
  return grilla.split(",").map(i => parseInt(i,10));
}
function ConvertirPosicion(posicion) { //DEVUELVE UN OBJETO DE TIPO POSICION
  let posicionRemplazo = posicion.replace(" ", ",").split(",");
  let x = parseInt(posicionRemplazo[0],10);
  let y = parseInt(posicionRemplazo[1],10);
  let Direccion = posicionRemplazo[2];
  let resp = PositionInicial(x, y, Direccion);
  return resp;
}
function Avanzar(posicion, grilla) {
  let filas = grilla[0];
  let columnas = grilla[1];
  if(posicion.direccion === "N" && posicion.j + 1 <= filas){
    posicion.j++;
  }
  if(posicion.direccion === "S" && posicion.j - 1 >= 0){
    posicion.j--;
  }
  if(posicion.direccion === "E" && posicion.i + 1 <= columnas){
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
function  CapurarTamañoGrilla(cadena) {
  let dividir = cadena.split("/");
  return dividir[0];
}
function CapturarPosicionInicial(cadena) {
  let dividir = cadena.split("/");
  return dividir[1];
}
function  CapurarInstrucciones(cadena) {
  let dividir = cadena.split("/");
  return dividir[2];
}
module.exports = {
  PositionInicial,
  Avanzar,
  GirarIzq,
  GirarDer,
  CapturarPosicionInicial,
  CapurarTamañoGrilla,
  CapurarInstrucciones,
  ConvertirGrilla,
  ConvertirPosicion,
  ProcesarComandos,
  ControladorAuto
}