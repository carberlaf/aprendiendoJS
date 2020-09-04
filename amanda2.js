module.exports = {
  geometricSum(a, x, n) {
    //a-primer término, x-razón, n-número de terminos
    if(x === 1) return a*n;
    return a*(1 - Math.pow(x, n))/(1 - x);
  },
  arithmeticSum(n) {
    //de 1 a n
    return (n + 1)*n/2;
  },
  quadraticFormula(a, b, c) {
    //ax2+bx+c
    const D = Math.sqrt(b*b - 4*a*c);
    //D-determinante. Si < 0 no hay, si 0 una raiz
    return [(-b + D)/(2*a), (-b - D)/(2*a)];
  },
};
