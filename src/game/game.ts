import {Entity} from "../utils";
import {Grid} from "../grid";
import {Fleet} from "../fleet";
import {Team} from "../team";

export class Game extends Entity {

    private _lastTimeStamp = 0;

    public awake() {
        const grid = new Grid();
        this.entities.push(
            grid,
            new Fleet(Team.A, grid),
            new Fleet(Team.B, grid)
        );
        super.awake();
        window.requestAnimationFrame(() => {
            this._lastTimeStamp = Date.now();
            this.update();
        })

    }

    public update() {
        const deltaTime = (Date.now() -  this._lastTimeStamp) / 1000;
        super.update(deltaTime);

        this._lastTimeStamp = Date.now();
        window.requestAnimationFrame(() =>
            this.update());
    }
}
