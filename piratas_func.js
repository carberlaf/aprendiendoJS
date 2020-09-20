module.exports = {
  limpiarApuestas(){
    let apuestas = { corona: 0, ancla: 0, corazones: 0, picas: 0, tréboles: 0, diamantes: 0 };
    return apuestas;
  },
  rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
  },
  randFace() {
    return Object.keys(this.limpiarApuestas())
    //return ["corona", "ancla", "corazones", "picas", "tréboles", "diamantes"]
    [this.rand(0, 5)];
  },
  capturarFondos(){
    if (!process.argv[2]){
      let a = 50;
      return {
        valor: a,
        mensaje: `Jugar con fondos standar: ${a} peniques`,
      }
    }
    else {
      let a = Number(process.argv[2]);
      if ( a > 100){
        console.log('Limite de fondos a jugar: 100  peniques');
        process.exit();
      }
      return {
        valor: a,
        mensaje: `Iniciando con: ${a} peniques`,
      }
    }
  },
  baza() {
    let a = [];
    for(let roll = 0; roll < 3; roll++) {
      a.push(this.randFace());
    }
    return {
      mano: a,
      mensaje: `\tmano: ${a.join(', ')}`,
    }
  },
};
