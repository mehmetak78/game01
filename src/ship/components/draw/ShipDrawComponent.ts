import {Entity, IComponent, Vector2D} from "../../../utils";
import {CanvasLayer} from "../../../canvas-layer";
import {Settings} from "../../../settings";
import {Ship} from "../../ship";
import {Team} from "../../../team";

export class ShipDrawComponent implements IComponent {
    entity!: Entity | null;

    private get position(): Vector2D {
        const position = (<Ship>this.entity).position;
        if (!position) {
            throw new Error('Attempt to draw a ship that has no Position');
        }
        return position;
    }

    awake(): void {
        this.clear();
    }

    update(deltaTime: number): void {
        this.clear();
        this.draw();
    }

    private draw(): void {
        const radius = 40;
        const colors = Settings.ships.colors;
        const color = (<Ship>this.entity).factory.team === Team.A ? colors.a : colors.b;
        CanvasLayer.foreground.fillCircle(this.position, Settings.ships.radius, color);
    }

    private clear(): void {
        CanvasLayer.foreground.clearRect(
            new Vector2D(
                this.position.x - Settings.grid.nodeSize / 2,
                this.position.y - Settings.grid.nodeSize / 2,
            ),
            new Vector2D(Settings.grid.nodeSize, Settings.grid.nodeSize)
        )
    }

}