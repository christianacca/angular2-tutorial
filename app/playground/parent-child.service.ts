import {Injectable} from "angular2/core";

export interface SharedObject {
    counter: number[];
}

@Injectable()
export class ParentChildService {
    shared: SharedObject = { counter: [0] };
}