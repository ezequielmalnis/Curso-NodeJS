let nombre='María';
let apellido='Gomez';
let sueldoActual=45000;
let porcentajeAumento=25;
let calculoAumento=sueldoActual*porcentajeAumento/100;
let nuevoSueldo=sueldoActual+calculoAumento;
console.log('Hola estimada '+nombre+' '+apellido);
console.log('En base a su sueldo actual:');
console.log('$',sueldoActual);
console.log('Ha recibido un aumento del ',porcentajeAumento,'%:');
console.log(calculoAumento);
console.log('y su nuevo sueldo es de: '+'$',nuevoSueldo);