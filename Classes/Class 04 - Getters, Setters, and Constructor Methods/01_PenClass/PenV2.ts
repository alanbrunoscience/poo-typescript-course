export class PenV2 {

    public model: string;
    public color: string;
    private _penTip: number;
    protected ink: number;
    protected capped: boolean;

    // Constructor
    constructor(model: string, color: string, penTip: number, inkLevel: number) {
        this.model = model;
        this.color = color;
        this._penTip = penTip;
        this.ink = inkLevel;
        this.cap(); // Inicialmente, a caneta está tampada.
    }

    // Getters and Setters with Validation
    get penTip(): number {
        return this._penTip;
    }

    set penTip(value: number) {
        if (value > 0 && value <= 1) {
            this._penTip = value;
        } else {
            throw new Error("Invalid pen tip size. Must be between 0 and 1.");
        }
    }

    get inkLevel(): number {
        return this.ink;
    }

    set inkLevel(value: number) {
        if (value >= 0 && value <= 100) {
            this.ink = value;
        } else {
            throw new Error("Invalid ink level. Must be between 0 and 100.");
        }
    }

    // Personalized Methods
    public status(): void {
        console.log("*** ABOUT THE PEN ***\n");
        console.log(`-> Model: ${this.model};`);
        console.log(`-> Color: ${this.color};`);
        console.log(`-> Tip: ${this._penTip};`);
        console.log(`-> Ink Level: ${this.inkLevel};`);
        console.log(`-> Is the pen capped? ${this.capped ? "Yes" : "No"}.\n`);
    }

    public cap(): void {
        this.capped = true;
    }

    public uncap(): void {
        this.capped = false;
    }

}