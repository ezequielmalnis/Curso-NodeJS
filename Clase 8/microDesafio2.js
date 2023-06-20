let graduadosDeHTML5= '30 45 25 34 18 23 16 50 72 70';
let graduadosDeCSS3= '50 45 71 34 23 45 65 75 63 43 74 70';
let graduadosDeJAVASCRIPT= '70 65 58 45 23 57 34 17 72';
let graduadosDeNODEJS= '45 56 73 34 65 72 70 32';

function promedio(html5,css3,javaScript,nodeJs, curso){
let promedioCurso=0;
let graduadosDeHTML5Array = graduadosDeHTML5.split(' ').map(i=>Number(i));
let graduadosDeCSS3Array = graduadosDeHTML5.split(' ').map(i=>Number(i));
let graduadosDeJAVASCRIPTArray = graduadosDeHTML5.split(' ').map(i=>Number(i));
let graduadosDeNODEJSArray = graduadosDeHTML5.split(' ').map(i=>Number(i));

if(curso==1){
    for(let i=0; i<graduadosDeHTML5Array.length;i++){
        promedioCurso=promedioCurso+graduadosDeHTML5Array[i];
    }
    return promedioCurso/graduadosDeHTML5Array.length;
}else if(curso==2){
    for(let i=0; i<graduadosDeCSS3Array.length;i++){
        promedioCurso=promedioCurso+graduadosDeCSS3Array[i];
    }
    return promedioCurso/graduadosDeCSS3Array.length;
}else if(curso==3){
    for(let i=0; i<graduadosDeJAVASCRIPTArray.length;i++){
        promedioCurso=promedioCurso+graduadosDeJAVASCRIPTArray[i];
    }
    return promedioCurso/graduadosDeJAVASCRIPTArray.length;
}else if(curso==4){
    for(let i=0; i<graduadosDeNODEJSArray.length;i++){
        promedioCurso=promedioCurso+graduadosDeNODEJSArray[i];
    }
    return promedioCurso/graduadosDeNODEJSArray.length;
}else{
    let mensaje='Por favor ingrese un número del 1 al 4';
    return mensaje
}
}
console.log(promedio(graduadosDeHTML5,graduadosDeCSS3,graduadosDeJAVASCRIPT,graduadosDeNODEJS,5))