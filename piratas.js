const f = require('./piratas_func.js');
let res = f.capturarFondos();
let fondos = res.valor;
console.log(res.mensaje + fondos);
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
  // roll dice
  const mano = [];
  for(let roll = 0; roll < 3; roll++) {
    mano.push(f.randFace());
  }
  console.log(`\tmano: ${mano.join(', ')}`);
  // collect ganancias
  let ganancias = 0;
  for(let die=0; die < mano.length; die++) {
    let face = mano[die];
    if(apuestas[face] > 0) ganancias = ganancias + apuestas[face];
  }
  fondos = fondos + ganancias;
  console.log(`\tganancias: ${ganancias}`);
}
console.log(`\tFondos finales: ${fondos}`);
