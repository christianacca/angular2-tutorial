import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroService} from "./heroes/hero.service";
import {PlaygroundComponent} from "./playground/playground.component";
import {CrisisCenterComponent}   from './crisis-center/crisis-center.component';
import { HERO_ROUTES } from "./heroes/heroes-routes"

@Component({
    selector: "my-app",
    directives:[PlaygroundComponent, ROUTER_DIRECTIVES],
    providers: [HeroService],
    template: `
    <h1>Component Router</h1>
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
      <a [routerLink]="['Hero', {id: '1'}]">Asset Detail</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['Playground']">Playground</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
    { path:'/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent, useAsDefault: true },
    { path:'/playground', name: 'Playground', component: PlaygroundComponent },
    ...HERO_ROUTES
])
export class AppComponent {
    heroes = [{ name: "J"}, { name: "C"}];
    addHero(name: string){
        this.heroes.push({ name: name});
    }
}