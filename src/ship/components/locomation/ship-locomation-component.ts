import {Entity, IComponent, Vector2D} from "../../../utils";
import {Node} from "../../../node";

export class ShipLocomationComponent implements IComponent {


    entity!: Entity | null;

    private _node: Node | null = null;

    get node(): Node | null {
        return this._node;
    }

    set node(value: Node | null) {
        this._node = value;
    }

    public get position(): Vector2D | null {
        return this.node ? this.node.center : null;
    }

    awake(): void {
    }

    update(deltaTime: number): void {
    }

}