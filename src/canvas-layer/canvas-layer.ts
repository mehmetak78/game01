import {Canvas, Vector2D} from "../utils";
import {Settings} from "../settings";

export class CanvasLayer {

    private static _background: Canvas;
    private static _foreground: Canvas;

    private constructor() {}

    public static get foreground(): Canvas {
        if (!this._foreground) {
            this._foreground = this.initCanvas({ zIndex: '1' });
        }
        return this._foreground;
    }

    public static get background(): Canvas {
        if (!this._background) {
            this._background = this.initCanvas({ zIndex: '0' });
        }
        return this._background;
    }

    private static initCanvas(style: Partial<CSSStyleDeclaration>): Canvas {
        const size = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * Settings.grid.dimension + Settings.grid.nodeOffset
        const canvas = new Canvas(new Vector2D(size, size))
        canvas.awake()
        canvas.setStyle(style);
        return canvas
    }
}