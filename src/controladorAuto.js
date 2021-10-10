

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
  PositionInicial
}