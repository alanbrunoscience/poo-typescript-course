export class Pen {

    public model: string;
    public color: string;
    private _penTip: number;
    protected inkLevel: number;
    protected capped: boolean;

    // Constructor, Getters, and Setters Methods
    constructor(
        model: string,
        color: string,
        penTip: number,
        inkLevel: number,
    ) {
        this.setModel(model);
        this.setColor(color);
        this.setPenTip(penTip);
        this.setInkLevel(inkLevel);
        this.cap();
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getPenTip(): number {
        return this._penTip;
    }

    public setPenTip(penTip: number): void {
        if (penTip > 0 && penTip <= 1) {
            this._penTip = penTip;
        } else {
            console.error("\n-> Invalid pen tip size. Must be between 0 and 1.\n");
        }
    }

    public getInkLevel(): number {
        return this.inkLevel;
    }

    public setInkLevel(inkLevel: number): void {
        if(inkLevel >= 0 && inkLevel <= 100) {
            this.inkLevel = inkLevel;
        } else {
            console.error("\n-> Invalid ink level. Must be between 0 and 100.\n");
        }
    }

    public getCapped(): boolean {
        return this.capped;
    }

    public setCapped(capped: boolean): void {
        this.capped = capped;
    }

    // Personalized Methods
    public status(): void {
        console.log("*** ABOUT THE PEN ***\n");
        console.log(`Model: ${this.model};`);
        console.log(`Color: ${this.color};`);
        console.log(`Tip: ${this._penTip};`);
        console.log(`Ink Level: ${this.inkLevel};`);
        console.log(`Is the pen capped? ${this.capped}.\n`);
    }

    public cap(): void {
        this.capped = true;
    }

    public uncap(): void {
        this.capped = false;
    }
    
}
