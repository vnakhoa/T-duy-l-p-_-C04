import {question} from "readline-sync";

let n: number = Number(question('Nhap so n: '));

let sum: number = 0;
for (let i: number = 0; i<n ; i++) {
    if(n%i == 0)
        sum +=i;
}

if(sum == n) {
    console.log('Yes');
}
else {
    console.log('No');
}