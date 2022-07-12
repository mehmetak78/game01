import {IComponent} from "./component.h";
import {IAwake, IUpdate} from "../lifecycle";

type Constr<T> = {new(...args: unknown[]): T};

export abstract class Entity implements IAwake, IUpdate{


    private _components: IComponent[] = [];
    private _entites: Entity[] = [];

    get components(): IComponent[] {
        return this._components;
    }

    get entites(): Entity[] {
        return this._entites;
    }

    public addComponent(component: IComponent) {
        component.entity = this;
        this._components.push(component);
    }

    public getComponent<C extends IComponent>(constr: Constr<C>): C {
        for (const component of this._components) {
            if (component instanceof constr) {
                return component as C;
            }
        }

        throw new Error(`Component ${constr.name} not found on Entity ${this.constructor.name}`)
    }

    public removeComponent<C extends IComponent>(constr: Constr<C>): void {
        let toRemove: IComponent | undefined;
        let index: number | undefined;

        for (let i= 0; i< this._components.length; i++) {
            const component = this._components[i];
            if (component instanceof constr) {
                toRemove = component;
                index = i;
                break;
            }
        }
        if (toRemove && index) {
            toRemove.entity = null;
            this._components.splice(index, 1);
        }
    }

    public hasComponent<C extends IComponent>(constr: Constr<C>): boolean {
        for (const component of this._components) {
            if (component instanceof constr) {
                return true;
            }
        }
        return false;
    }

    update(deltaTime: number): void {
        for (const component of this._components) {
            component.update(deltaTime);
        }
        for (const entity of this._entites) {
            entity.update(deltaTime);
        }
    }

    awake(): void {
        for (const component of this._components) {
            component.awake();
        }
        for (const entity of this._entites) {
            entity.awake();
        }
    }

}
