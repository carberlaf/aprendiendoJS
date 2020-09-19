const f = require('./piratas_func.js');
let res = f.capturarFondos();
let fondos = res.valor;
console.log(res.mensaje);
let ronda = 0;
// starting conditions
while(fondos > 1 && fondos <= 100) {
  ronda++;
  console.log(`ronda ${ronda}:`);
  console.log(`\tFondos iniciales: ${fondos}p`);
  // place apuestas
  let apuestas = { corona: 0, ancla: 0, corazones: 0,
  picas: 0, tréboles: 0, diamantes: 0 };
  let totalBet = f.rand(1, fondos);
  if(totalBet === 7) {
    totalBet = fondos;
    apuestas.corazones = totalBet;
  } else {
    // distribute total bet
    let remaining = totalBet;
    do {
      let bet = f.rand(1, remaining);
      let face = f.randFace();
      apuestas[face] = apuestas[face] + bet;
      remaining = remaining - bet;
    } while(remaining > 0)
  }
  fondos = fondos - totalBet;
  console.log('\tapuestas: ' +
  Object.keys(apuestas).map(face => `${face}: ${apuestas[face]} peniques`).join('\n\t\t ') +
  ` (total: ${totalBet} peniques)`);
  // se tiran los dados
  let baza = f.baza();
  console.log(baza.mensaje);
  // ganancias TODO pérdidas
  let ganancias = 0;
  for(let die=0; die < baza.mano.length; die++) {
    let face = baza.mano[die];
    if(apuestas[face] > 0) ganancias = ganancias + apuestas[face];
  }
  fondos = fondos + ganancias;
  console.log(`\tganancias: ${ganancias}`);
}
console.log(`\tFondos finales: ${fondos}`);
