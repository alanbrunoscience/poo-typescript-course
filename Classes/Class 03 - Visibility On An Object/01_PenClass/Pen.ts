export class Pen {

    public model: string;
    public color: string;
    private _penTip: number;
    protected ink: number;
    private capped: boolean;

    public status(): void {
        console.log(`Model: ${this.model}`);
        console.log(`Color: ${this.color}`);
        console.log(`Tip: ${this._penTip}`);
        console.log(`Ink: ${this.ink}`);
        console.log(`Is the pen capped? ${this.capped}`);
    }

    public scribble(): void {
        if (this.capped) {
            console.log(`-> It's impossible to scribble! The pen is capped!`);
        } else {
            console.log(`-> I'm scribbling...`);
        }
    }

    public cap(): void {
        this.capped = true;
    }

    public uncap(): void {
        this.capped = false;
    }
}

/* Warnings!

1) In TypeScript (and JavaScript), class attributes are declared directly, without "let", "var", or "const".

2) To create a basic class without the constructor and to be able to change the values of its object attributes from another class (for example App.ts), it's necessary to uncomment the "strictPropertyInitialization" property in tsconfig.json and put its value to false, like this:

{
  "compilerOptions": {
    "strictPropertyInitialization": false,
  }
}

*/
