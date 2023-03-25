import {question} from "readline-sync";

let h: number = Number(question('Nhap h: '));

let s: string = '*';
let empty: string = ' ';   // 1 space
let g: string = ' ';       // 1 space

let count: number;

for(let k: number = 1; k<=h ; k++) {
    count = k - 1;
    if(count ==0) {
        g = (empty +s);
        console.log(g);
    }

    else if (count == h-1) {
        g = empty;
        for(let t: number = 1; t<= (count +1) ; t++) {          //  (count + 1) == h
            g += (s+ empty);
        }
        console.log(g);
    }

    else {
        g = (empty + s);
        for (let t: number = 1; t<=(count + count -1) ; t++) {
            g += empty;
        }
        g += s;
        console.log(g);
    }
}


