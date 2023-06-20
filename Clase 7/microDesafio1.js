let movimientosBancarios = [5000, 3000, 2000, -1500, -15];


function estadoBancario (saldos){
    let creditos =0;
    let debitos=0;
    let saldo=0
    let infoSalida=[]
    for(let i=0; i<saldos.length; i++){
        if(saldos[i]<=0){
            debitos = debitos + saldos[i]
    }
    else if(saldos[i]>0){
        creditos = creditos + saldos[i]
}
    else{

    }
}
saldo=creditos+debitos
infoSalida.push(creditos,debitos,saldo)
return infoSalida
}

console.log(estadoBancario(movimientosBancarios));

function infomacionAlUsuario(nombre, apellido, callback){
console.log('Estimado/a '+nombre + ' '+ apellido);
console.log(' ');
console.log('El total de los depósitos es: '+'$'+callback[0]);
console.log('El total de los retiros es: '+'$'+callback[1]);
console.log('Por lo tanto su saldo actual en la cuenta es : '+'$'+callback[2]);
}

infomacionAlUsuario('Ezequiel', 'Malnis', estadoBancario(movimientosBancarios));