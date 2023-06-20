function armarHamburguesa (tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate){
let valorHamburguesa = 0;

switch(tipoDeHamburguesa){ // Switch para definir el tipo de hamburguesa que quiere el cliente, de aca me llevo precio Base
    case 'Carne a la parrilla':
        valorHamburguesa = 1800;
        break;
    case 'Pollo':
        valorHamburguesa=1500;
        break;
    case 'Vegetariana':
        valorHamburguesa=1200;
        break;
    default:
        error1=true;
}

if(jamon==true){ // Los siguientes if van a ir sumando el valor del adicional si es true, sino respetan el valor que se arrastra
    valorHamburguesa=valorHamburguesa+30;
}
else if(jamon==false){
    valorHamburguesa=valorHamburguesa;
}
else{
;    
}

if(queso==true){
    valorHamburguesa=valorHamburguesa+25;
}
else if(queso==false){
    valorHamburguesa=valorHamburguesa;
}
else{
;    
}

if(salsaDeTomate==true){
    valorHamburguesa=valorHamburguesa+5;
}
else if(salsaDeTomate==false){
    valorHamburguesa=valorHamburguesa;
}
else{
;
}

if(mayonesa==true){
    valorHamburguesa=valorHamburguesa+5;
}
else if(mayonesa==false){
    valorHamburguesa=valorHamburguesa;
}
else{
;
}

if(mostaza==true){
    valorHamburguesa=valorHamburguesa+5;
}
else if(mostaza==false){
    valorHamburguesa=valorHamburguesa;
}
else{
;
}

if(tomate==true){
    valorHamburguesa=valorHamburguesa+15;
}
else if(tomate==false){
    valorHamburguesa=valorHamburguesa;
}
else{
;
}

return valorHamburguesa // Devuelvo el valor total de la hamburguesa para usarla en la próxima función

}

function mensajeUsuario (nombre, apellido, tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, callback){

let mensaje = 'Estimad@ ' + nombre + ' '+ apellido + ', el total a pagar por su hamburguesa es: ' + '$'+callback(tipoDeHamburguesa,jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate);

return mensaje

}

console.log(mensajeUsuario('Manuela', 'Perez', 'Vegetariana', false, true, true, false, false, false, armarHamburguesa))