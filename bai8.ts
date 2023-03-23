import {question} from "readline-sync";

let m: number = Number(question('Nhap so m: '));
let n: number = Number(question('Nhap so n: '));

let count: number = 0;
for (let i: number = m; i<=n ; i++) {
    for (let k: number =0; k<=n ; k++) {
        if(k*k == i) {
            count++;
        }
        if(count == 1){
            console.log(i);
            break;
        }

    }
    if(count == 1) {
        break;
    }
}