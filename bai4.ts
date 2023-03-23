import {question} from "readline-sync";

let n: number = Number(question('Nhap so n: '));

let count_odd: number = 0;
for (let i: number = 1; i<=n ; i++) {
    if(n%i == 0 && i%2 != 0)
        count_odd++;
}
console.log(count_odd);