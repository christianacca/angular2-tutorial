import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroService} from "./heroes/hero.service";
import {HighlightDirective} from "./attribute-directive/highlight.directive";
import {ClickMeComponent} from "./click-me.component";
import {KeyupComponent} from "./keyup.component";
import {CrisisCenterComponent}   from './crisis-center/crisis-center.component';
import { HERO_ROUTES } from "./heroes/heroes-routes"

@Component({
    selector: "my-app",
    directives:[ClickMeComponent, KeyupComponent, HighlightDirective, ROUTER_DIRECTIVES],
    providers: [HeroService],
    template: `
    <h1 [myHighlight]="color" [defaultColor]="'orange'">Component Router</h1>
    <input type="radio" name="colors" (click)="color = 'blue'"/> Blue
    <input type="radio" name="colors" (click)="color = 'yellow'"/> Yellow
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
      <a [routerLink]="['Hero', {id: '1'}]">Asset Detail</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path:'/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent, useAsDefault: true},
    ...HERO_ROUTES
])
export class AppComponent {
    heroes = [{ name: "J"}, { name: "C"}];
    addHero(name: string){
        this.heroes.push({ name: name});
    }
}