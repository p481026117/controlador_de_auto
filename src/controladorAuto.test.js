import libreria, { GenerarMatriz } from './controladorAuto.js';

describe("CONTROLADOR DE AUTO TEST", () => {

  it("Deberia devolver un Objeto posicion ingresada como parametros a la funcion.", () => {
    expect(libreria.PositionInicial(1,2,"N")).toEqual({"direccion": "N", "i": 1, "j": 2});
  });
  it("Deberia devolver un objeto {'direccion': 'N', 'i': 1, 'j': 1} de la funcion Avanzar hacia el norte", () => {
    let posicion = libreria.PositionInicial(1,0,"N");
    let grilla = [3,3];
    expect(libreria.Avanzar(posicion,grilla)).toEqual({"direccion": "N", "i": 1, "j": 1});
  });
  it("Deberia devolver un objeto {'direccion': 'S', 'i': 1, 'j': 1} de la funcion Avanzar hacia el sur", () => {
    let posicion = libreria.PositionInicial(1,1,"S");
    let grilla = [3,3];
    expect(libreria.Avanzar(posicion,grilla)).toEqual({"direccion": "S", "i": 1, "j": 0});
  });
  it("Deberia devolver un objeto {'direccion': 'E', 'i': 1, 'j': 1} de la funcion Avanzar hacia el este", () => {
    let posicion = libreria.PositionInicial(1,1,"E");
    let grilla = [3,3];
    expect(libreria.Avanzar(posicion,grilla)).toEqual({"direccion": "E", "i": 2, "j": 1});
  });
  it("Deberia devolver un objeto {'direccion': 'O', 'i': 1, 'j': 1} de la funcion Avanzar hacia el norte", () => {
    let posicion = libreria.PositionInicial(1,1,"O");
    let grilla = [3,3];
    expect(libreria.Avanzar(posicion,grilla)).toEqual({"direccion": "O", "i": 0, "j": 1});
  });
});

