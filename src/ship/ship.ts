import {Entity, Vector2D} from "../utils";
import {Fleet} from "../fleet";
import {ShipDrawComponent, ShipLocomationComponent} from "./components";
import {Node} from "../node";

export class Ship extends Entity {

    private readonly _locomationComponent: ShipLocomationComponent;

    constructor(public readonly factory: Fleet,  node: Node) {
        super();
        this._locomationComponent = new ShipLocomationComponent();
        this._locomationComponent.node = node;
    }

    public get position(): Vector2D |null {
        return this._locomationComponent.position;
    }

    awake() {
        this.addComponent(new ShipDrawComponent());
        this.addComponent(this._locomationComponent);
        super.awake();
    }
}