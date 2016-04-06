import {Component} from "angular2/core";

@Component({
    selector: "my-keyup",
    template: `
    <input #enterBox type="text" (keyup.enter)="0" (blur)="0"/>
    <input #box type="text" [value]="enterBox.value" />
    <p>{{box.value}}</p>
    `
})
export class KeyupComponent{
    keys = "";
}