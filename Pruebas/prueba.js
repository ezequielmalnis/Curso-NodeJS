// function cantidadDeMesesConGanancia(unPeriodo) {
//     let cantidad = 0;
//     for (let i = 0; i < unPeriodo.length;i++) {
//         if(unPeriodo[i]>0){
//        cantidad=cantidad+1
//        }
//     }
//     return cantidad;
//   }

//   console.log(cantidadDeMesesConGanancia([0, 3, -1, 5]));

//   console.log([0, 3, -1, 5].length);

// function saldosDeMesesConGanancia(unPeriodo){
//     let mesesPositivos=[];
//     for (let i=0; i < unPeriodo.length; i++){
//         if(unPeriodo[i]>0){
//         mesesPositivos.push(unPeriodo[i]);
//         }
//     }
//     return mesesPositivos;
//     }

// console.log(saldosDeMesesConGanancia([10, -10, 2, 100]));

// function sumatoriaBajoImporte(unPeriodo){
//     let sumatoria=0;
//     for(let i=0;i<unPeriodo.length;i++){
//         if(unPeriodo[i]>0 && unPeriodo[i]<=1000)
//         sumatoria=sumatoria+unPeriodo[i];
//     }
//     return sumatoria
// }

// console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));

// function asientosDisponibles(listadoDisponible,asientoRequerido){
//     if(listadoDisponible.indexOf(asientoRequerido)!=-1){
//         console.log('Felicitaciones, el asiento número ' + asientoRequerido + ' está disponible')
//     }
//     else{
//         console.log('Lo sentimos, el asiento número ' + asientoRequerido + ' está ocupado, pero aún quedan ' + listadoDisponible.length + ' asientos disponibles')
//     }

// }

// asientosDisponibles([3, 15, 18, 25], 78);

// function reporteDePasajeros(estacion){
//     let mensaje=' ';
//     let pasajeros=200;
//     for(let i=0;i<=estacion;i++){
//         if(i==0){
//             mensaje='En la estación '+ i + ' hay ' + pasajeros +  ' pasajeros arriba del tren,'
//         }
//         else if(i<=estacion && i!=5){
//             pasajeros=pasajeros+50-30;
//             mensaje=mensaje + 'En la estación '+ i + ' hay ' + pasajeros + ' pasajeros arriba del tren,'
//         }
//         else if(i<=estacion && i==5){
//             pasajeros=pasajeros+120-80;
//             mensaje=mensaje + 'En la estación '+ i + ' hay ' + pasajeros + ' pasajeros arriba del tren,'
//         }
//     }
//     return mensaje;
    
//     }

    // console.log(reporteDePasajeros(5));

//     function reporteDePasajeros(estacion){
//         let array=[];
//         let pasajeros=200;
//         for(let i=0;i<=estacion;i++){
//             if(i==0){
//                 array.push('En la estación '+ i + ' hay ' + pasajeros +  ' pasajeros arriba del tren')
//             }
//             else if(i<=estacion && i!=5){
//                 pasajeros=pasajeros+50-30;
//                 array.push('En la estación '+ i + ' hay ' + pasajeros + ' pasajeros arriba del tren')
//             }
//             else if(i<=estacion && i==5){
//                 pasajeros=pasajeros+120-80;
//                 array.push('En la estación '+ i + ' hay ' + pasajeros + ' pasajeros arriba del tren')
//             }
//         }
//         return array;
        
//         }


// console.log(reporteDePasajeros(5));

// console.log(reporteDePasajeros(5).length);

// function reporteDePasajeros(estacion){
//     let array=['En la estación 0 hay 200 pasajeros arriba del tren'];
//     let pasajeros=200;
//     for(let i=1;i<=estacion;i++){
//         if(i==5){
//             pasajeros=pasajeros+120-80;
//             array.push('En la estación 5 hay 320 pasajeros arriba del tren')
    
//         }else{
//             pasajeros=pasajeros+50-30;
//             array.push('En la estación '+ i + ' hay ' + pasajeros + ' pasajeros arriba del tren')
//         };
//     }
//     return array;
    
//     }

// let clave=[ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"];

// function laClaveSecreta(clave){
// let sinAsterisco=[];
// let claveArray=[];
// let claveDescifrada=''
// for(let i=0; i<clave.length;i++){
//     if(clave[i]!='*'){
//         sinAsterisco.push(clave[i]);
//     }
// }
// for(let i=sinAsterisco.length-1; i>=0;i--){
//     claveArray.push(sinAsterisco[i]);

// }
// claveDescifrada=claveArray.join(''); 
// return claveDescifrada
// }

// let sinAsterisco=[];
// let claveArray=[];
// let claveDescifrada=''
// for(let i=0; i<clave.length;i++){
//     if(clave[i]!='*'){
//         sinAsterisco.push(clave[i]);
//     }}

// for(let i=sinAsterisco.length-1; i>=0;i--){
//         claveArray.push(sinAsterisco[i]);}


// console.log(sinAsterisco);
// console.log(claveArray)
// console.log(laClaveSecreta(clave));

