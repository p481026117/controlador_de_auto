import sumar from "./App.js";

describe("Deberia devolver un ", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});
