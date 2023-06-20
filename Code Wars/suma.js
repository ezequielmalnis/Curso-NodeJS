
array=[19, 5, 42, 2, 77]

function sumTwoSmallestNumbers(numbers) {  
    let ordenados = numbers.sort((a, b) => a - b);
    let suma=ordenados[0]+ordenados[1];
    return suma
  }

