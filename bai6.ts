import {question} from "readline-sync";

let n: number = Number(question('Nhap so n: '));

let count: number = 0;
for (let i: number = 0; i<=n; i++) {
    if(i*i == n){
        count++;
    }
}

if(count != 0){
    console.log('Yes');
}
else {
    console.log('No');
}