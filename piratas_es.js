function rand(m, n) {
	return m + Math.floor((n - m + 1)*Math.random());
}
// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
  return ["corona", "ancla", "corazones", "picas", "tréboles", "diamantes"]
  [rand(0, 5)];
}
let fondos = 50;
let ronda = 0;
// iniciando conditions
while(fondos > 1 && fondos < 100) {
  ronda++;
  console.log(`ronda ${ronda}:`);
  console.log(`\tiniciando fondos: ${fondos}p`);
  // place apuestas
  let apuestas = { corona: 0, ancla: 0, corazones: 0,
  picas: 0, tréboles: 0, diamantes: 0 };
  let totalApostado = rand(1, fondos);
  if(totalApostado === 7) {
    totalApostado = fondos;
    apuestas.corazones = totalApostado;
  } else {
    // distribute total apuesta
    let remanente = totalApostado;
    do {
      let apuesta = rand(1, remanente);
      let face = randFace();
      apuestas[face] = apuestas[face] + apuesta;
      remanente = remanente - apuesta;
    } while(remanente > 0)
  }
  fondos = fondos - totalApostado;
  console.log('\tapuestas: ' +
  Object.keys(apuestas).map(face => `${face}: ${apuestas[face]} peniques`).join('\n\t\t ') +
  ` (total apostado: ${totalApostado} peniques)`);
  // roll dice
  const mano = [];
  for(let roll = 0; roll < 3; roll++) {
    mano.push(randFace());
  }
  console.log(`\tmano: ${mano.join(', ')}`);
  // collect ganancias
  let ganancias = 0;
  for(let dado=0; dado < mano.length; dado++) {
    let face = mano[dado];
    if(apuestas[face] > 0) ganancias = ganancias + apuestas[face];
  }
  fondos = fondos + ganancias;
  console.log(`\tganancias: ${ganancias}`);
}
console.log(`\tending fondos: ${fondos}`);
