let electrodomesticos = ['Heladera', 'Lavarropas', 'Tostadora', 'Televisor', 'Licuadora', 'Aspiradora'];


console.log(electrodomesticos[2]);
console.log(electrodomesticos[3]);
console.log(electrodomesticos[5]);
console.log(electrodomesticos[0]);

const primerElemento=electrodomesticos.shift();

electrodomesticos.push(primerElemento);

console.log(electrodomesticos);

electrodomesticos.push('Lavavajillas','Microondas');

console.log(electrodomesticos);

console.log(electrodomesticos.length);

const buscarElectro = electrodomesticos.includes('Heladera');

if(buscarElectro==true){

    console.log('Producto encontrado');
} else {
    console.log('El producto buscado no existe');
}
let electoString = electrodomesticos.join(' ');

console.log(electoString);
console.log(electoString.length);
let nuevoElectroString=electoString.replace('Lavarropas','Thermomix');
console.log(nuevoElectroString);
let arrayElectro=nuevoElectroString.split(' ');
console.log(arrayElectro);