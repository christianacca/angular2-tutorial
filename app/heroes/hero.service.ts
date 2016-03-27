import {Injectable} from "angular2/core";
import { Hero }    from './hero';

const HEROES: Hero[] = [
    { id: 1, name: "Magnito", power: "Weather Changer", alterEgo: "" },
    { id: 2, name: "Superman", power: "Super Flexible", alterEgo: "" }
];

@Injectable()
export class HeroService {
    private _heroesPromise = Promise.resolve(HEROES);
    getAll() {
        return this._heroesPromise;
    }
    get(id: number) {
        return this._heroesPromise.then(heroes => heroes.find(h => h.id === id));
    }
}