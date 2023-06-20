let cursos=[['html5', 4000], ['css3', 5000], ['javascript', 10000], ['react', 7000], ['nodejs', 15000]];
let cursoAlumno=['HTML5','NODEJS','REACT'];

function calcularMontoTotal(cursosDisp,seleccion){
    let montoTotal=0;
   for(let i=0;i<seleccion.length;i++){
        for(let j=0;j<cursosDisp.length; j++){
        if(seleccion[i]==cursosDisp[j][0].toUpperCase()){
            montoTotal+=cursosDisp[j][1];
        }
        }
    }
    return montoTotal;
}
function mensajeAlAlumno(nombre, apellido, cursosDisp, seleccion, callback){
    console.log('Estimado '+nombre + ' '+ apellido + ', en función a los cursos seleccionados')
    for(let i=0; i<seleccion.length;i++){

    console.log(i+1+'-'+' '+ seleccion[i] + '\n')
    }
    console.log('El monto a pagar es de '+ '$ '+ callback(cursosDisp,seleccion)+ '\n' + 'Bienvenido a Digital House')
}
mensajeAlAlumno('Ezequiel', 'Malnis', cursos, cursoAlumno, calcularMontoTotal);