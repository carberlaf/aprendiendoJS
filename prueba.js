const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'prueba > '
});
//var a = [];
rl.prompt();

rl.question('Numero? ', (answer) => {
  // TODO: Log the answer in a database
  while (answer) { //OJO..... ENTRA EN UN BUCLE
    console.log(`Thank you for your valuable feedback: ${answer}`);
  }
  rl.close();
});

// rl.on('line', (line) => {
//   if (line ===  '') {
//     //console.log(a);
//     rl.close();
//   }
//   else {
//     rl.prompt();
//   }
//
// })
//console.log('Se acabó');
// rl.on('close', () => { // control-D
//   console.log(a.map(x => Math.pow(Number(x),2)));
//   // console.log('Cerrando prueba.');
//   // process.exit(0);
// });
