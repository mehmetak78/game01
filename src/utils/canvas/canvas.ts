import {Vector2D} from "../vector2D";
import {IAwake} from "../lifecycle";
import {Color} from "../color";

export class Canvas implements IAwake{

    private _elm!: HTMLCanvasElement;
    private _ctx!: CanvasRenderingContext2D;


    get ctx(): CanvasRenderingContext2D  {
        return this._ctx;
    }
    get elm(): HTMLCanvasElement  {
        return this._elm;
    }

    constructor(public readonly size: Vector2D) { }

    awake(): void {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', `${this.size.x}px`);
        canvas.setAttribute('height', `${this.size.y}px`);
        document.body.appendChild(canvas);
        this._elm = canvas;
        const ctx = this._elm.getContext('2d');
        if (!ctx) {
            throw new Error('Context identifier is not supported');
        }
        this._ctx = ctx;
    }

    public fillRect(start: Vector2D, size: Vector2D, color: Color): void {
        this._ctx.beginPath();
        this._ctx.fillStyle = color.asString();
        this._ctx.rect(start.x, start.y, size.x, size.y);
        this._ctx.fill()
    }

    public clearRect(start: Vector2D, size: Vector2D): void {
        this._ctx.clearRect(start.x, start.y, size.x, size.y);
    }

    public fillCircle(center: Vector2D, radius: number, color: Color): void  {
        this._ctx.beginPath()
        this._ctx.arc(center.x, center.y, radius, 0, Math.PI * 2)
        this._ctx.fillStyle = color.asString()
        this._ctx.fill()
    }

    public setStyle(style: Partial<CSSStyleDeclaration>): void {
        for (const key in style) {
            if (!Object.hasOwnProperty.call(style, key)) {
                continue;
            }

            if (!style[key]) {
                continue;
            }

            this._elm.style[key] = style[key] as string;
        }
    }

}