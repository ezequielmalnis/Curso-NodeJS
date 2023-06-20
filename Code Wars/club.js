
let ingresantes=[[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

function openOrSenior(data){
    let miembros=[];
    for(let i=0;i<data.length;i++){
      if(data[i][0]>=55 && data[i][1]>7){
      miembros.push('Senior')
    }else{
      miembros.push('Open')
    }
    
  }
  return miembros
  }

  console.log(openOrSenior(ingresantes));