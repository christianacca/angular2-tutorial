import {Component} from "angular2/core";

@Component({
    selector: "click-me",
    template: `<button (click)="onClickMe()"></button>`
})
export class ClickMeComponent {
    onClickMe(){
        alert("helo there from ClickMe");
    }
}