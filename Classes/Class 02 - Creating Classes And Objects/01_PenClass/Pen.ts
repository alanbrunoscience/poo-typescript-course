export class Pen {

    model: string;
    color: string;
    penTip: number;
    charge: number;
    capped: boolean;

    public status(): void {
        process.stdout.write(`Is a ${this.color} pen`);
        process.stdout.write(` capped? ${this.capped}`);
    }

    public scribble(): void {

    }

    public cap(): void {
        
    }

    public uncap(): void {

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