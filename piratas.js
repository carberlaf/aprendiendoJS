function rand(m, n) {
	return m + Math.floor((n - m + 1)*Math.random());
}
// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
  //return ["crown", "anchor", "corazones", "spade", "club", "diamond"]
  return ["corona", "ancla", "corazones", "picas", "tréboles", "diamantes"]
  [rand(0, 5)];
}
let fondos = 50;
let ronda = 0;
// starting conditions
while(fondos > 1 && fondos < 100) {
  ronda++;
  console.log(`ronda ${ronda}:`);
  console.log(`\tFondos iniciales: ${fondos}p`);
  // place apuestas
  // let apuestas = { crown: 0, anchor: 0, corazones: 0,
  // spade: 0, club: 0, diamond: 0 };
  let apuestas = { corona: 0, ancla: 0, corazones: 0,
  picas: 0, tréboles: 0, diamantes: 0 };
  let totalBet = rand(1, fondos);
  if(totalBet === 7) {
    totalBet = fondos;
    apuestas.corazones = totalBet;
  } else {
    // distribute total bet
    let remaining = totalBet;
    do {
      let bet = rand(1, remaining);
      let face = randFace();
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
    mano.push(randFace());
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
