let numero=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers){
    numbers.unshift('(');
    let parte1=numbers.slice(0,4);
    parte1.push(')');
    parte1.push(' ');
    let parte2=numbers.slice(4,7);
    parte2.push('-');
    let parte3=numbers.slice(7,11);
    numeroFinal=parte1.join('')+parte2.join('')+parte3.join('')
    console.log(numeroFinal);
    return numeroFinal}

//   console.log(createPhoneNumber(numero))


numero.unshift('(');
let parte1=numero.slice(0,4);
parte1.push(')');
parte1.push(' ');
let parte2=numero.slice(4,7);
parte2.push('-');
let parte3=numero.slice(7,11);
numeroFinal=parte1.join('')+parte2.join('')+parte3.join('')
console.log(numeroFinal);
