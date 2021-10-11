import libreria, { GenerarMatriz } from './controladorAuto.js';

describe("CONTROLADOR DE AUTO TEST", () => {

  it("Deberia devolver un Objeto {'direccion': 'N', 'i': 1, 'j': 2} con posicion ingresada como parametros a la funcion.", () => {
    expect(libreria.PositionInicial(1,2,"N")).toEqual({"direccion": "N", "i": 1, "j": 2});
  });
  //AVANZAR
  it("Deberia devolver un objeto {'direccion': 'N', 'i': 1, 'j': 1} de la funcion (1,0,'N') Avanzar hacia el norte", () => {
    let posicion = libreria.PositionInicial(1,0,"N");
    let grilla = [3,3];
    expect(libreria.Avanzar(posicion,grilla)).toEqual({"direccion": "N", "i": 1, "j": 1});
  });
  it("Deberia devolver un objeto {'direccion': 'S', 'i': 1, 'j': 0} de la funcion (1,1,'S') Avanzar hacia el sur", () => {
    let posicion = libreria.PositionInicial(1,1,"S");
    let grilla = [3,3];
    expect(libreria.Avanzar(posicion,grilla)).toEqual({"direccion": "S", "i": 1, "j": 0});
  });
  it("Deberia devolver un objeto {'direccion': 'E', 'i': 2, 'j': 1} de la funcion (1,1,'E') Avanzar hacia el este", () => {
    let posicion = libreria.PositionInicial(1,1,"E");
    let grilla = [3,3];
    expect(libreria.Avanzar(posicion,grilla)).toEqual({"direccion": "E", "i": 2, "j": 1});
  });
  it("Deberia devolver un objeto {'direccion': 'O', 'i': 0, 'j': 1} de la funcion (1,1,'O') Avanzar hacia el oeste", () => {
    let posicion = libreria.PositionInicial(1,1,"O");
    let grilla = [3,3];
    expect(libreria.Avanzar(posicion,grilla)).toEqual({"direccion": "O", "i": 0, "j": 1});
  });
  //GIRAR DERECHA
  it("Deberia devolver un objeto {'direccion': 'E', 'i': 1, 'j': 0} de la funcion (1,0,'N') Girar hacia la derecha", () => {
    let posicion = libreria.PositionInicial(1,0,"N");
    expect(libreria.GirarDer(posicion)).toEqual({"direccion": "E", "i": 1, "j": 0});
  });
  it("Deberia devolver un objeto {'direccion': 'O', 'i': 1, 'j': 1} de la funcion (1,1,'S') Girar hacia la derecha", () => {
    let posicion = libreria.PositionInicial(1,1,"S");
    expect(libreria.GirarDer(posicion)).toEqual({"direccion": "O", "i": 1, "j": 1});
  });
  it("Deberia devolver un objeto {'direccion': 'S', 'i': 1, 'j': 1} de la funcion (1,1,'E') Girar hacia la derecha", () => {
    let posicion = libreria.PositionInicial(1,1,"E");
    expect(libreria.GirarDer(posicion)).toEqual({"direccion": "S", "i": 1, "j": 1});
  });
  it("Deberia devolver un objeto {'direccion': 'N', 'i': 1, 'j': 1} de la funcion (1,1,'O') Girar hacia la derecha", () => {
    let posicion = libreria.PositionInicial(1,1,"O");
    expect(libreria.GirarDer(posicion)).toEqual({"direccion": "N", "i": 1, "j": 1});
  });
  //GIRAR IZQUIERDA
  it("Deberia devolver un objeto {'direccion': 'O', 'i': 1, 'j': 0} de la funcion (1,0,'N') Girar hacia la izquierda", () => {
    let posicion = libreria.PositionInicial(1,0,"N");
    expect(libreria.GirarIzq(posicion)).toEqual({"direccion": "O", "i": 1, "j": 0});
  });
  it("Deberia devolver un objeto {'direccion': 'E', 'i': 1, 'j': 1} de la funcion (1,1,'S') Girar hacia la izquierda", () => {
    let posicion = libreria.PositionInicial(1,1,"S");
    expect(libreria.GirarIzq(posicion)).toEqual({"direccion": "E", "i": 1, "j": 1});
  });
  it("Deberia devolver un objeto {'direccion': 'N', 'i': 1, 'j': 1} de la funcion (1,1,'E') Girar hacia la izquierda", () => {
    let posicion = libreria.PositionInicial(1,1,"E");
    expect(libreria.GirarIzq(posicion)).toEqual({"direccion": "N", "i": 1, "j": 1});
  });
  it("Deberia devolver un objeto {'direccion': 'S', 'i': 1, 'j': 1} de la funcion (1,1,'O') Girar hacia la izquierda", () => {
    let posicion = libreria.PositionInicial(1,1,"O");
    expect(libreria.GirarIzq(posicion)).toEqual({"direccion": "S", "i": 1, "j": 1});
  });
  //CONVERTIR POSICION
  it("Deberia devolver un objeto {'direccion': 'N', 'i': 1, 'j': 2} de la funcion '1,2 N' para convertirla en objeto", () => {
    let posicion = "1,2 N";
    expect(libreria.ConvertirPosicion(posicion)).toEqual({"direccion": "N", "i": 1, "j": 2});
  });
  //CONVERTIR GRILLA
  it("Deberia devolver un array [3,3] de la funcion '3,3' convertida", () => {
    let grilla = "3,3";
    expect(libreria.ConvertirGrilla(grilla)).toEqual([3,3]);
  });
  it("Deberia devolver un objeto {'direccion': 'N', 'i': 1, 'j': 3} de la funcion ProcesarComandos(grilla,posicion,instrucciones)", () => {
    let grilla = "5,5";
    let posicion = "1,2 N";
    let instrucciones = "IAIAIAIAA"
    expect(libreria.ProcesarComandos(grilla,posicion,instrucciones)).toEqual({"direccion": "N", "i": 1, "j": 3});
  });
  it("Deberia devolver un array '1,3 N' de la funcion ControladorAuto('5,5/1,2 N/IAIAIAIAA')", () => {
    expect(libreria.ControladorAuto("5,5/1,2 N/IAIAIAIAA")).toEqual("1,3 N");
  });
  it("Deberia devolver un array '5,1 E' de la funcion ControladorAuto('5,5/3,3 E/AADAADADDA')", () => {
    expect(libreria.ControladorAuto("5,5/3,3 E/AADAADADDA")).toEqual("5,1 E");
  });
});

