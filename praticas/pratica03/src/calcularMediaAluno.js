function calcularMediaAluno(a1, a2, a3) {
  if (a1 == undefined && a2 == undefined) {
    throw Error("Notas a1 ou a2 não informadas");
  } else if (a1 == undefined) {
    throw Error("Nota a1 não informada");
  } else if (a2 == undefined) {
    throw Error("Nota a2 não informada");
  }


  if (a1 < 0 && a2 < 0) {
    throw Error("Notas a1 ou a2 não podem ser negativas");
  } else if (a1 < 0) {
    throw Error("Nota a1 não pode ser negativa");
  } else if (a2 < 0) {
    throw Error("Nota a2 não pode ser negativa");
  }


  if (a3 == undefined) {
    return a1 * 0.4 + a2 * 0.6;
  }


  if (a3 < 0) {
    throw Error("Nota a3 não pode ser negativa");
  }

  
  if (a1 + a3 > a1 + a2) {
    return a1 * 0.4 + a3 * 0.6;
  } else if(a2 + a3 > a1 + a2){
    return a3 * 0.4 + a2 * 0.6;
  }
}

module.exports = { calcularMediaAluno };
