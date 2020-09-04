module.exports = {
  rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
  },
  randFace() {
    return ["corona", "ancla", "corazones", "picas", "tréboles", "diamantes"]
    [this.rand(0, 5)];
  },
  capturarFondos(){
    if (!process.argv[2]){
      return {
        valor:50,
        mensaje:'Jugar con fondos standar: ',
      }
    }
    else {
      let a = Number(process.argv[2]);
      if ( a > 100){
        console.log('Limite de fondos a jugar: 100');
        process.exit();
      }
      return {
        valor: a,
        mensaje: "Iniciando con: ",
      }
    }
  },
};
