const colors = require('colors');
let n = 10;
let color = 'green';
for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
        if ((i % j == 0) && (j != i)) {
            break;
        } else {
            if (color === 'green') {
                console.log(colors.green(i));
                color = 'yellow'
            } else if (color === 'yellow') {
                console.log(colors.yellow(i));
                color = 'red'
            } else {
                console.log(colors.red(i));
                color = 'green'
            }
            break;
        }
    }
}
