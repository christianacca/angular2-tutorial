import {Component, OnInit} from 'angular2/core';
import {HeroService} from "./hero.service";
import {Router} from 'angular2/router';

@Component({
  template: `
    <h2>HEROES</h2>
    <p>Get your heroes here</p>
    <ul>
        <li *ngFor="#hero of heroes" (click)="openHero(hero)">
            {{hero.name}}
        </li>
    </ul>
    `
})
export class HeroListComponent implements OnInit {
    heroes: {id: number, name: string}[];
    constructor(private heroesService: HeroService, private _router: Router) {}
    ngOnInit(){
        this.heroesService.getAll().then(data => this.heroes = data);
    }
    openHero(hero: {name:string, id: number}){
        this._router.navigate(["Hero", { id: hero.id}])
    }
 }