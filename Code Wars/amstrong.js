// function narcissistic(value) {
//     let potencia = value.lenght;
//     let myFunc = num => Number(num);
//     let resultado=0
//     var intArr = Array.from(String(value), myFunc)
//     for(let i=0; i<value.lenght;i++){
//       resultado=resultado+value[i]^potencia;
//     }
//     if(value==resultado){
//       return true
//     }
//     else{
//       return false
//     }
//   }

let value=7;

let myFunc = num => Number(num);
let resultado=0
var intArr = Array.from(String(value), myFunc)
potencia=intArr.length
for(let i=0; i<intArr.length;i++){
  resultado=resultado+Math.pow(intArr[i],potencia);
}
// if(value==resultado){
//   return true
// }
// else{
//   return false}


console.log(intArr);
console.log(potencia);
console.log(resultado);
