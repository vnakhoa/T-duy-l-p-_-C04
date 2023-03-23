import {question} from "readline-sync";

let n: number = Number(question('Nhap so n: '));

let s: string = '';
let r: string = 'Kmin';

for (let i: number = 1; i<=n ; i++) {
    if(i == n) {
        s += (r + ' '+ String(i) + '.');
    }
    if(i != n) {
        s += (r + ' ' + String(i) + ', ');
    }
}
console.log(s);