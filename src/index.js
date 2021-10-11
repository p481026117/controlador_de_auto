import libreria, { GenerarMatriz } from './controladorAuto.js';

const comandos = document.querySelector("#comandos-input");
const form = document.querySelector("#controladorAuto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var posicionInicial = libreria.CapturarPosicionInicial(comandos.value);
  var instrucciones = libreria.CapurarInstrucciones(comandos.value);
  var grilla = libreria.CapurarTamañoGrilla(comandos.value);
  //var comandosIngresados = comandos.value;
  var posicionFinal = libreria.ControladorAuto(comandos.value);
  
  div.innerHTML = "<label>POSICION INICIAL ==> </label>" + posicionInicial + "<br>" + 
                  "<label>INSTRUCCIONES ==> </label>" + instrucciones + "<br>" + 
                  "<label>TAMAÑO GRILLA ==> </label>" +  grilla + "<br><br>" + 
                  "<label>POSICION FINAL ==> </label>" + posicionFinal;
});
