
export class Color {
    public readonly R: number;
    public readonly G: number;
    public readonly B: number;
    public readonly A: number;

    constructor(r: number, g: number, b: number, a: number) {

        if (!Color.isValidChannel(r)) {
            throw new Error('Provided incorrect values for Red channel');
        }
        if (!Color.isValidChannel(g)) {
            throw new Error('Provided incorrect values for Green channel');
        }
        if (!Color.isValidChannel(b)) {
            throw new Error('Provided incorrect values for Blue channel');
        }
        if (!Color.isValidChannel(a, true)) {
            throw new Error('Provided incorrect values for Alpha channel');
        }

        this.R = r;
        this.G = g;
        this.B = b;
        this.A = a;
    }

    public static isValidChannel(v:number, isAlpha = false): boolean {
        const max = isAlpha ? 1 : 255;
        if (v<0 || v>max) {
            return false;
        }
        if (!isAlpha && v % 1 !== 0) {
            return false;
        }
        return  true;
    }

    public asString(): string {
        return `rgba(${this.R}, ${this.G}, ${this.B}, ${this.A})`;
    }

    public static fromString(str: string): Color {
        const arr = str
            .replace(new RegExp(/\(|\)|[A-Za-z]/g), '')
            .split(',')

        const
            r = Number(arr[0]),
            g = Number(arr[1]),
            b = Number(arr[2]),
            a = Number(arr[3])

        if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
            throw new Error('Invalid string')
        }

        return new Color(r, g, b, a)
    }
}