function rand(m, n) {
	return m + Math.floor((n - m + 1)*Math.random());
}
// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
  return ["corona", "ancla", "corazones", "picas", "tréboles", "diamantes"]
  [rand(0, 5)];
}
let fondos;
function iniFondos(){
	fondos = 50 || document.getElementById('fondos').value;
	alert (fondos);
}
let ronda = 0;
// iniciando conditions
function iniciarAutomatico(){
	while(fondos > 1 && fondos < 100) {
	  ronda++;
	  document.writeln(`<p>ronda ${ronda}:</p>`);
	  document.writeln(`<p>\tiniciando fondos: ${fondos}p</p>`);
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
	  document.writeln('<p>\tapuestas: ' +
	  Object.keys(apuestas).map(face => `${face}: ${apuestas[face]} peniques`).join('<br>\t\t ') +
	  ` (total apostado: ${totalApostado} peniques)</p>`);
	  // roll dice
	  const mano = [];
	  for(let roll = 0; roll < 3; roll++) {
	    mano.push(randFace());
	  }
	  document.writeln(`<p>\tmano: ${mano.join(', ')}</p>`);
	  // collect ganancias
	  let ganancias = 0;
	  for(let dado=0; dado < mano.length; dado++) {
	    let face = mano[dado];
	    if(apuestas[face] > 0) ganancias = ganancias + apuestas[face];
	  }
	  fondos = fondos + ganancias;
	  document.writeln(`<p>\tganancias: ${ganancias}</p>`);
	}
}
document.writeln(`<p>\tending fondos: ${fondos}</p>`)
//console.log(`\tending fondos: ${fondos}`);
//document.getElementById('ronda').innerText+=ronda;
// no funciona document.getElementById('mano').innerText+=`${mano.join(', ')}`;
