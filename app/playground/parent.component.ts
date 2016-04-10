import {Component} from "angular2/core";
import {ChildListComponent} from "./child-list.component";
import {ParentChildService, SharedObject} from "./parent-child.service";


@Component({
    selector: "parent",
    directives: [ChildListComponent],
    providers: [ParentChildService],
    template: `
        <h2>Parent</h2>
        <ul>
            <li *ngFor="#item of items">{{item | json}}</li>
        </ul>
        <!--<p>Counter: <span class="badge">{{sharedObj.counter[sharedObj.counter.length-1]}}</span></p>-->
        <child-list [children]="items"></child-list>
    `
})
export class ParentComponent {
    sharedObj: SharedObject;
    constructor(service: ParentChildService){
        this.sharedObj = service.shared;
    }
    items = [
        { firstName: "Christian", lastName: "Crowhurst", age: 41},
        { firstName: "Katie", lastName: "Crowhurst", age: 36},
    ]    
}