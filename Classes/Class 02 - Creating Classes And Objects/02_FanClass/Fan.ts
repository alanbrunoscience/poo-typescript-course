export class Fan {

    brand: string;
    model: string;
    color: string;
    propeller: boolean;
    shaft: boolean;
    heightAdjuster: number;
    speedAdjuster: number;

    public status(): void {
        console.log(`\n--- General Fan Information ---\n`);
        console.log(`-> Brand: ${this.brand};`);
        console.log(`-> Model: ${this.model};`);
        console.log(`-> Color: ${this.color};`);
        console.log(`-> Is the fan on? ${this.propeller};`);
        console.log(`-> Adjust to rotate? ${this.shaft};`);
        console.log(`-> Height adjustment: ${this.adjustHeight()};`);
        console.log(`-> Propeller speed: ${this.adjustSpeed()}`);
    }

    public turnOn(): void {
        this.propeller = true;
    }

    public turnOff(): void {
        this.propeller = false;
    }

    public rotate(): void {
        this.shaft = true;
    }

    public stopTheShaft(): void {
        this.shaft = false;
    }

    public adjustHeight(): string {

        if(this.heightAdjuster === 1)
            return "Max-height";
        else if (this.heightAdjuster === 2)
            return "Middle-height";
        else if (this.heightAdjuster === 3)
            return "Min-height";
        else
            return "Invalid height";
            
    }

    public adjustSpeed(): string {
        if(this.propeller) {
            if(this.speedAdjuster === 1)
                return "Maximum speed.";
            else if (this.speedAdjuster === 2)
                return "Moderate speed.";
            else if (this.speedAdjuster === 3)
                return "Low speed.";
            else
                return "Invalid speed!";
        } else {
            return "The fan is off! Turn it on to adjust the speed!";
        }
        
    }

}