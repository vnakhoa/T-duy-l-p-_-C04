import {question} from "readline-sync";

let w: number = Number(question('Nhap w: '));
let h: number = Number(question('Nhap h: '));

let s: string = '*';
let g: string = ' ';     // Gồm 1 dấu space
let e: string = ' ';   // Gồm 1 dấu space

for (let i: number = 1; i<=h ; i++) {
    if(i==1) {
        for (let k: number = 1; k<=w ; k++) {
            g += (s+e);
            if(k == w) {
                console.log(g);
            }
        }
    }
    else if(i==h) {
        g = ' ';
        for (let k: number = 1; k<=w ; k++) {
            g += (s+e);
            if(k == w) {
                console.log(g);
            }
        }
    }
    else {
        g = ' ';
        for (let k: number = 1; k<=w ; k++) {
            if(k == 1) {
                g += (s+e);
            }
            else if(k == w) {
                g += s; 
            }
            else {
                g += (e+e);
            }
        }
        console.log(g);
    }
}