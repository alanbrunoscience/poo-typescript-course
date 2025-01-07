import { Pen } from "./Pen";

export function main() {

    // Pen class instance
    let p1 = new Pen();

    p1.model = "Bic Cristal Up";
    p1.color = "Blue";
    // p1._penTip = 0.5; // It's impossible to assign a value for a private attribute out of the class in which it is declared.
    // p1.ink = 80; // In TypeScript, it's impossible to assign a value to a protected attribute outside the class in which it is declared, unless the assignment occurs within a subclass of that class.

    p1.cap();

    p1.status();

    p1.scribble();
    

}

main();