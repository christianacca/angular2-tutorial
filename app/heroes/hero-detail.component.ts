import {Component, OnInit} from "angular2/core";
import {NgForm}    from 'angular2/common';
import {RouteParams, Router} from  'angular2/router';

import { Hero }    from './hero';
import {HeroService} from "./hero.service";

@Component({
  selector: 'hero-form',
  templateUrl: 'app/heroes/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    constructor(private _routeParams: RouteParams, private _router: Router, private heroService: HeroService) {}
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    gotoHeroesList(){
        this._router.navigate(["Heroes"]);
    }
    ngOnInit(){
        var id = parseInt((this._routeParams.get("id") || "1"), 10);
        this.heroService.get(id).then(hero => this.model = hero);
    }
}