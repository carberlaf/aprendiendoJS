// The exports shorthand (e.j: amanda3.js) only works for exporting objects; if you
// want to export a function or some other value, you must use
// module.exports (e.j: amanda2.js) . Furthermore, you can’t meaningfully mix the
// two: use one or the other.

exports.geometricSum = function(a, x, n) {
  if(x === 1) return a*n;
  const suma = a*(1 - Math.pow(x, n))/(1 - x);
  const res = `primerTérmino: ${a}
                razón: ${x}
                númeroDeTérminos: ${n}
                últimoTérmino: ${a*Math.pow(x, (n - 1))}
                suma: ${suma}`

  return res;
};
exports.arithmeticSum = function(a, x, n) {
  const suma = (2*a + (n-1)*x)*(n/2);
  const res = `primerTérmino: ${a}
                razón: ${x}
                númeroDeTérminos: ${n}
                últimoTérmino: ${(a + (n - 1) * x)}
                suma: ${suma}`
  return res;
};
exports.quadraticFormula = function(a, b, c) {
  const D = Math.sqrt(b*b - 4*a*c);
  switch (true) {
    case D > 0: return [(-b + D)/(2*a), (-b - D)/(2*a)];
    case D === 0: return ['Única raiz: ', (-b + D)/(2*a)];
    default: return 'No hay raices';
  }
};

exports.sphereVolume = function(r){
  return 4/3*Math.PI*Math.pow(r, 3);
}
