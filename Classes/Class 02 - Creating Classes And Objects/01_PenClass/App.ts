import { Pen } from "./Pen";

export function main() {

    // Pen class instance
    let p1: Pen = new Pen();

    p1.color = "Blue";
    p1.penTip = 0.5;

    p1.cap();
    p1.status();
    p1.scribble();

    // Pen class new instance
    let p2: Pen = new Pen();

    p2.model = "Bic Cristal Up";
    p2.color = "Black";

    console.log();
    p2.uncap();
    p2.status();
    p2.scribble();
    

}

main();