import {question} from "readline-sync";

let n: number = Number(question('Nhap so n: '));

let count: number = 0;
for (let i: number = 1; i<=n ; i++) {
    if(n%i == 0)
        count++;
}
console.log(count);