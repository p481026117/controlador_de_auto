import libreria, { GenerarMatriz } from './controladorAuto.js';

describe("CONTROLADOR DE AUTO TEST", () => {

  it("Deberia devolver un Objeto posicion ingresada como parametros a la funcion.", () => {
    expect(libreria.PositionInicial(1,2,"N")).toEqual({"direccion": "N", "i": 1, "j": 2});
  });
  
});

