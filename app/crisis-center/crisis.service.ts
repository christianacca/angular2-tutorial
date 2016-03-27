import {Injectable} from "angular2/core";
import { Crisis }    from './crisis';

const CRISISES: Crisis[] = [
    { id: 1, name: "Earth quake" },
    { id: 2, name: "Volcano" }
];

@Injectable()
export class CrisisService {
    private _crisisesPromise = Promise.resolve(CRISISES);
    getAll() {
        return this._crisisesPromise;
    }
    get(id: number) {
        return this._crisisesPromise.then(crisises => crisises.find(c => c.id === id));
    }
}