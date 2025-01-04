import { Pen } from "./Pen";

export function main() {

    // Pen class instance
    let p1: Pen = new Pen();

    p1.color = "Blue";
    p1.penTip = 0.5;
    p1.capped = false;

    p1.status();

}

main();