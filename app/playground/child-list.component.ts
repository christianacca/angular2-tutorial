import {Component, Input, AfterViewChecked} from "angular2/core";
import {ParentChildService, SharedObject} from "./parent-child.service";

interface Person { firstName: string, lastName: string, age: number}

@Component({
    selector: "child-list",
    template: `
        <h2>ChildListComponent</h2>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Age</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#child of children">
                    <td>{{child.firstName}}</td>
                    <td>{{child.lastName}}</td>
                    <td>{{child.age}}</td>
                    <td><button class="btn btn-default" (click)="haveBirthday(child)">+1</button></td>
                </tr>
            </tbody>
        </table>
    `
})
export class ChildListComponent implements AfterViewChecked {
    private sharedObj: SharedObject;
    private doIncrement = false;
    constructor(service: ParentChildService) {
        this.sharedObj = service.shared;
    }
    @Input() children: Person[];
    haveBirthday(child: Person){
        child.age += 1;
        this.doIncrement = true;
    }
    ngAfterViewChecked(){
        if (!this.doIncrement) return;
        
        const nextId = this.sharedObj.counter.length;
        this.sharedObj.counter.push(nextId);
    }
}