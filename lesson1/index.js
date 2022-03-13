// const colors = require('colors');
//console.log(process.argv);
// const [ name, name2 ] = process.argv.slice(2);
// console.log(colors.red(`hello Node.js to ${ name } and ${ name2 }`));


let n = 10;
const colors = require('colors');
for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if ((i % j == 0) && (j != i)) {

      break;
    } else {
      console.log(colors.red(i));
      break;

    }
  }
}

