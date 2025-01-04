import { Fan } from "./Fan";

export function main() {

    let f1: Fan = new Fan();

    f1.brand = "Britania";
    f1.model = "Column Fan";
    f1.color = "Black";
    f1.propeller = false;
    f1.shaft = true;
    f1.heightAdjuster = 1;
    f1.speedAdjuster = 1;

    f1.turnOn();
    f1.status();

    f1.stopTheShaft();
    f1.status();

}

main();