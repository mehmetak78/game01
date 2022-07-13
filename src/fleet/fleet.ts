import {Entity} from "../utils";
import {Team} from "../team";
import {Ship} from "../ship";
import {Settings} from "../settings";
import {Grid} from "../grid";
import {Node} from "../node";

export class Fleet extends Entity {

    constructor(public readonly team: Team, private readonly _grid: Grid) {
        super();
    }

    public awake() {
        this.prepareShips();
        super.awake();
    }

    private prepareShips(): void {
        const dimension = Settings.grid.dimension;
        const fleetSize = Settings.ships.fleetSize
        const nodes = this._grid.entities;

        for (let i=0; i< fleetSize; i++) {
            const node = this.team == Team.A ? nodes[i * dimension] : nodes[nodes.length - 1 - i * dimension]
            const ship = new Ship(this, node as Node) ;
            this.entities.push(ship)
            ship.awake()
        }
    }

}