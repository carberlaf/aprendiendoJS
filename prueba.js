const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'prueba > '
});
var a = [];
rl.prompt();

rl.on('line', (line) => {
  a.push(line.trim());
  // switch (line.trim()) {
  //   //case isFinite(Number(line.trim())) :
  //   case line.trim() :
  //     console.log(`Has tecleado ${line.trim()}`);
  //     break;
  //   case 'hello':
  //     console.log('world!');
  //     break;
  //   default:
  //     console.log(`Say what? I might have heard '${line.trim()}'`);
  //     break;
  // }
  rl.prompt();
}).on('close', () => { // control-D
  console.log(a.map(x => Math.pow(Number(x),2)));
  // console.log('Cerrando prueba.');
  // process.exit(0);
});
