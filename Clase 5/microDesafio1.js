function AlquilerAuto (tipoDeAuto, diasAlquiler, sillaBebe){
    let alquilerDias= null;
    let alquilerTotal = null;
    let mensaje ='';
    let error1=' ';
    let error2=' ';

   switch (tipoDeAuto){
    case 'Compacto':
        alquilerDias=diasAlquiler*14000;
        break;

     case 'Mediano':
        alquilerDias=diasAlquiler*17000;
        break;

    case 'Camioneta':
         alquilerDias=diasAlquiler*28000;
        break;
    default:
    error1=true;
}
switch (sillaBebe){

    case 'Si' || 'SI' || 'si':
    alquilerTotal = alquilerDias + 1200;
    mensaje='Estimado cliente: en base al tipo de vehículo ' +  tipoDeAuto +' alquilado, considerando los ' + diasAlquiler + ' días utilizados, el monto total a pagar es de ' + '$'+ alquilerTotal + ' Esto incluye $1200 por Silla de Bebe';
    break;
    case 'No' || 'NO' || 'no':
    alquilerTotal = alquilerDias;
    mensaje='Estimado cliente: en base al tipo de vehículo ' +  tipoDeAuto +' alquilado, considerando los ' + diasAlquiler + ' días utilizados, el monto total a pagar es de ' + '$'+ alquilerTotal;
    break
    default:
    error2=true;
    }

if(error1==true || error2==true){
mensaje='Revise los datos ingresados';
}
else{
return mensaje;
}
return mensaje;
}

console.log(AlquilerAuto('Compacto', 3, 'Si'));