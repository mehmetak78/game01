import {IComponent} from "../../../utils";
import {Node} from "../../node";
import {Settings} from "../../../settings";
import {CanvasLayer} from "../../../canvas-layer";

export class NodeDrawComponent implements IComponent {
    public entity!: Node;

    public awake() {

    }

    public update(deltaTime: number) {
        this.draw();
    }

    private clear(): void {
        CanvasLayer.background.clearRect(this.entity.start, this.entity.size);
    }

    private draw(): void {
        CanvasLayer.background.fillRect(
            this.entity.start,
            this.entity.size,
            Settings.grid.color
        )
    }
}
