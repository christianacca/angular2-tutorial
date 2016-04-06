import {Component} from "angular2/core";

import {HighlightDirective} from "./highlight.directive";
import {ClickMeComponent} from "./click-me.component";
import {KeyupComponent} from "./keyup.component";

@Component({
    selector: "playground",
    directives: [HighlightDirective, ClickMeComponent, KeyupComponent],
    template: `
    <h2 [myHighlight]="color" [defaultColor]="'orange'">Playground</h2>
    <input type="radio" name="colors" (click)="color = 'blue'"/> Blue
    <input type="radio" name="colors" (click)="color = 'yellow'"/> Yellow
    <div>
        <h4><code>click-me</code></h4>
        <click-me></click-me>
    </div>
    <div>
        <h4><code>my-keyup</code></h4>
        <my-keyup></my-keyup>
    </div>
    `
})
export class PlaygroundComponent {
    
}