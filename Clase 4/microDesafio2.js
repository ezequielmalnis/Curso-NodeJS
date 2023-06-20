let pagoMes=4520;
let consumoKWH=400;
let nuevoMonto = consumoKWH>300? pagoMes*1.2:pagoMes;

console.log(nuevoMonto);