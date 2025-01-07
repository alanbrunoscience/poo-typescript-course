import { Pen } from "./Pen";

export function main() {

    let p1 = new Pen("Bic Cristal", "Blue", 0.5, 100);
    p1.status();

    let p2 = new Pen("Bic Cristal", "Green", 0.7, 100);
    p2.status();    

}

main();