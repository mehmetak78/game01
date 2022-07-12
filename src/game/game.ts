import {Entity} from "../utils";
import {Grid} from "../grid";

export class Game extends Entity {

    private _lastTimeStamp = 0;

/*    private _entities: Entity[] = [];

    get entities(): Entity[] {
        return this._entities;
    }*/

    public awake() {


/*        for (const entity of this._entities) {
            entity.awake();
        }*/

        this.entites.push(new Grid());
        super.awake();
        window.requestAnimationFrame(() => {
            this._lastTimeStamp = Date.now();
            this.update();
        })

    }

    public update() {
        const deltaTime = (Date.now() -  this._lastTimeStamp) / 1000;
        super.update(deltaTime);

/*        for (const entity of this._entities) {
            entity.update(deltaTime);
        }*/

        this._lastTimeStamp = Date.now();
        window.requestAnimationFrame(() =>
            this.update());
    }
}
