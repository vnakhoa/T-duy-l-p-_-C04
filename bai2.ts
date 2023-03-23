import {question} from "readline-sync";

let n: number = Number(question('Nhap so n: '));
while(n != 0) {
    console.log(n);
    n = Number(question('Nhap so n: '));
}